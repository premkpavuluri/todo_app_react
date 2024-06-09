import React from "react";
import {StatusIcon} from "./styles/StyledComponents";

const Indicator = ({status, onChange}) => {
  return (<StatusIcon status={status} onClick={() => onChange()}/>);
}

export default Indicator;