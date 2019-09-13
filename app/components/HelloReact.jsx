// ./app/components/HelloReact
import React from "react";
const clickHere = () => console.log("Nice it works!!");
const HelloReact = () => {
  return (
    <div>
      Hello React
      <div onClick={clickHere}>Click here</div>
    </div>
  );
};
export default HelloReact;
