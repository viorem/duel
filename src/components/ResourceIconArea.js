import React from "react";

const ResourceIconArea = (props) => {
  return (
    <div className={props.outsideClass}>
      {props.name}:
      <div className="resourceIconArea">
        {props.children}
      </div>
    </div>
  );
};

export default ResourceIconArea