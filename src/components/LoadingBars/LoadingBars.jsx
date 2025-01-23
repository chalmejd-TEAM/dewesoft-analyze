import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";
import React from "react";

function LoadingBars() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <ReactLoading type="bars" color="#CD4A00" height={100} width={100} />
    </div>
  );
}

export default LoadingBars;
