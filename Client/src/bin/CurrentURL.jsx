import React from "react";

const CurrentURL = () => {
  const currenturl = window.location.href;
  console.log(currenturl);
  return <div>Local URL: {currenturl}</div>;
};

export default CurrentURL;
