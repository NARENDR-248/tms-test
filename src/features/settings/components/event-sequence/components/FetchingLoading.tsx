import React from "react";

// Styled Components
import { Components } from "../styled-components/sc-fl";

function FetchingLoading({ loader }) {
  return (
    <Components.LoaderBox>
      <Components.LoaderText>
        {loader ? "Fetching records" : "No Records Found"}
      </Components.LoaderText>
      {loader && <Components.Loader />}
    </Components.LoaderBox>
  );
}

export default FetchingLoading;
