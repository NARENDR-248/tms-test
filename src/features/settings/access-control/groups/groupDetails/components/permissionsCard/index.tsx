import React from "react";
import PermissionsCardStyles from "./styled";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const PermissionsCard = ({ protectedFeatureName, permissions }) => {
  return (
    <PermissionsCardStyles.Container>
      <PermissionsCardStyles.Heading>{protectedFeatureName}</PermissionsCardStyles.Heading>
      <PermissionsCardStyles.PermissionsContainer>
        <PermissionsCardStyles.CustomFormGroup>
          {permissions?.map(({ name, allowed, key }) => (
            <FormControlLabel
              key={key}
              control={
                <Checkbox
                  checked={allowed}
                  disabled
                  name={name}
                  sx={{
                    "&.Mui-disabled": {
                      color: "inherit", // This will remove the grey color usually applied to disabled checkboxes
                      opacity: allowed ? 1 : 0.5,
                    },
                    "&.Mui-checked": {
                      color: "#3BA5E1", // Change the color of the checkbox when checked
                    },
                  }}
                />
              }
              label={name}
              sx={{
                marginRight: "3em",
                fontSize: "0.7em",
                "& .MuiFormControlLabel-label": {
                  color: "#fff !important",
                  opacity: allowed ? 1 : 0.5,
                },
              }}
            />
          ))}
        </PermissionsCardStyles.CustomFormGroup>
      </PermissionsCardStyles.PermissionsContainer>
    </PermissionsCardStyles.Container>
  );
};

export default PermissionsCard;
