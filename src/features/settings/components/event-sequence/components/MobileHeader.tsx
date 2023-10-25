import React from "react";
import { useTranslation } from "react-i18next";
// Importing Icons & Images
import FilterIcon from "../assets/icons/filter.svg";

// Styled Components
import { Components } from "../styled-components/sc-mh";

function MobileHeader({
  openFilterPopper,
  isFilterApplied,
}: {
  openFilterPopper: Function;
  isFilterApplied: ConstrainBoolean;
}) {
  const { t } = useTranslation();

  return (
    <Components.MobileHeading>
      <Components.MobilePageName>
        {" "}
        {t("ess.sequence")}
      </Components.MobilePageName>
      <Components.MobileFilter>
        <Components.MobileFilterIcon
          src={FilterIcon}
          alt="#"
          onClick={() => openFilterPopper()}
        />
        {isFilterApplied && <Components.MobileIsFilterApplied />}
      </Components.MobileFilter>
    </Components.MobileHeading>
  );
}

export default MobileHeader;
