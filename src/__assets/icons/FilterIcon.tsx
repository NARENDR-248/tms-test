import React from "react";

const FilterIcon = ({ strokeColor }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 22" fill="none">
      <path
        d="M3.3999 1.1001H16.5999C17.6999 1.1001 18.5999 2.0001 18.5999 3.1001V5.3001C18.5999 6.1001 18.0999 7.1001 17.5999 7.6001L13.2999 11.4001C12.6999 11.9001 12.2999 12.9001 12.2999 13.7001V18.0001C12.2999 18.6001 11.8999 19.4001 11.3999 19.7001L9.9999 20.6001C8.6999 21.4001 6.8999 20.5001 6.8999 18.9001V13.6001C6.8999 12.9001 6.4999 12.0001 6.0999 11.5001L2.2999 7.5001C1.7999 7.0001 1.3999 6.1001 1.3999 5.5001V3.2001C1.3999 2.0001 2.2999 1.1001 3.3999 1.1001Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilterIcon;
