import styled from "styled-components";
import React, {useState} from "react";
import DeleteBtn from "../DeleteBtn";

const DeleteContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
`;

const withDelete = (Component, onDelete) => {
  return (props) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <DeleteContainer
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
          <Component {...props}/>
          {isHover && <DeleteBtn onClick={() => onDelete(props.id)}/>}
        </DeleteContainer>)
  }
}

export default withDelete;