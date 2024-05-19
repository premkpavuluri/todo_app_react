import React from "react";

const Indicator = ({status, onChange}) => {
  return (<div className={`indicator ${status}`} onClick={() => onChange()}></div>);
}

export default Indicator;