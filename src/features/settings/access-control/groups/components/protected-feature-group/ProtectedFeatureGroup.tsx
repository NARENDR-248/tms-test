import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

// Importing Styled Components
import { Components } from "./styled";

// Custom Components
import LineConnector from "./LineConnector";

// Importing Custom Icons
import DropdownIcon from "../../icons/short_left.svg";

function ProtectedFeatureGroup({
  protectedFeatureGroup,
  onGroupFeature,
  onPermission,
}: {
  protectedFeatureGroup: any;
  onGroupFeature: Function;
  onPermission: Function;
}): JSX.Element {
  const [protectedFeatures, setProtectedFeatures] = useState<any>([]);
  // Create an array of refs, one for each permission group
  // const permissionGroupRefs = protectedFeatures.map(() => useRef());
  const permissionGroupRefs = useRef<any>([]);

  // Create an object to track the expanded state for each node
  const [expandedNodes, setExpandedNodes] = useState<any>([]);
  const [connectorLineHeights, setConnectorLineHeights] = useState<any>({});

  const populateLineHeight = () => {
    // Create a ResizeObserver for each permission group
    const resizeObservers = permissionGroupRefs.current.map((ref, index) => {
      return new ResizeObserver((entries) => {
        for (let entry of entries) {
          // Handle the change in dimensions here
          setConnectorLineHeights((prevHeights) => ({
            ...prevHeights,
            [index]: entry.contentRect.height,
          }));
        }
      });
    });

    // Observe each ref with its corresponding ResizeObserver
    permissionGroupRefs.current.forEach((ref, index) => {
      if (ref.current) {
        resizeObservers[index].observe(ref.current);
      }
    });

    return () => {
      // Disconnect all ResizeObservers when the component unmounts
      resizeObservers.forEach((observer) => observer.disconnect());
    };
  };
  const handleExpandCollapse = (nodeId) => {
    // Toggle the expanded state for the clicked node
    setExpandedNodes((prevExpandedNodes) => ({
      ...prevExpandedNodes,
      [nodeId]: !prevExpandedNodes[nodeId],
    }));
    populateLineHeight();
  };

  useEffect(() => {
    protectedFeatureGroup.forEach((_, index) => {
      permissionGroupRefs.current[index] = React.createRef();
    });
    const timeoutId = setTimeout(() => {
      populateLineHeight();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [protectedFeatureGroup]);

  useEffect(() => {
    populateLineHeight();
  }, [expandedNodes]);

  return (
    <Components.ProtectedFeatureGroup.Container>
      {protectedFeatureGroup.length === 0
        ? Array.from({ length: 5 }).map((_, index) => {
            return (
              <Components.ProtectedFeatureGroup.SkeltonContainer key={index}>
                <Components.ProtectedFeatureGroup.Skelton variant="rounded" width={25} />
                <Components.ProtectedFeatureGroup.Skelton variant="rounded" />
              </Components.ProtectedFeatureGroup.SkeltonContainer>
            );
          })
        : protectedFeatureGroup.map((item, index) => {
            return (
              <div key={item.id}>
                <Components.ProtectedFeatureGroup.ParentBoxContainer
                  sx={{ height: expandedNodes[item.id] ? "auto" : "30px" }}
                  onClick={() => handleExpandCollapse(item.id)}
                  ref={permissionGroupRefs.current[index]}
                >
                  <LineConnector x1={10} y1={21} x2={10} y2={connectorLineHeights[index] || 0} style={{}} />

                  <Components.ProtectedFeatureGroup.ParentFormControlLabel
                    onClick={(e) => onGroupFeature(e, item.id)}
                    key={item.id}
                    label={item.name}
                    control={
                      <Components.ProtectedFeatureGroup.Checkbox
                        className="custom-checkbox"
                        checked={item.permissions.every((item) => item.enabled)}
                        indeterminate={
                          item.permissions.some((item) => item.enabled) &&
                          !item.permissions.every((item) => item.enabled)
                        }
                        // onChange={handleChange1}
                      />
                    }
                  />
                  <Components.ProtectedFeatureGroup.DropdownIcon src={DropdownIcon} alt="#" />
                  <Components.ProtectedFeatureGroup.BoxContainer
                    sx={{ display: "flex", flexDirection: "column", ml: 3, mt: 1, mb: 1 }}
                  >
                    {item.permissions.map((permission) => {
                      return (
                        <Components.ProtectedFeatureGroup.FormControlLabel
                          onClick={(e) => onPermission(e, permission.id)}
                          key={permission.id}
                          sx={{ mb: 1 }}
                          label={permission.action}
                          control={
                            <Components.ProtectedFeatureGroup.Checkbox
                              className="custom-checkbox"
                              checked={permission.hasOwnProperty("enabled") ? permission.enabled : false}
                            />
                          }
                        />
                      );
                    })}
                  </Components.ProtectedFeatureGroup.BoxContainer>
                </Components.ProtectedFeatureGroup.ParentBoxContainer>
              </div>
            );
          })}
    </Components.ProtectedFeatureGroup.Container>
  );
}

export default ProtectedFeatureGroup;
