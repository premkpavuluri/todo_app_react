import styled from "styled-components";

const TodoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    height: 2rem;
    background-color: var(--primary-background-color);
    color: var(--text-color);
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 0.3rem;
`;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    width: 600px;
    height: 2rem;
`;

const DecoratedTodoBox = styled.div`
    text-decoration: ${({status}) => status === "completed" ? "line-through" : "none"};

    font-size: 1.5rem;
    margin: 0 0.5rem;
    width: 100%;
`;

const DeleteButton = styled.span`
    color: var(--secondary-text-color);
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.3rem;
`;

const EditableInput = styled.input`
    background-color: var(--primary-background-color);
    font-size: 1.5rem;
    width: 100%;
    padding: 0.3rem;
    border: none;
    outline: none; /* Removes the default browser outline */
    box-shadow: none; /* Removes the default browser shadow */
    appearance: none; /* Removes the default browser appearance */
    -webkit-appearance: none; /* Removes the default browser appearance for Safari */
    -moz-appearance: none; /* Removes the default browser appearance for Firefox */
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const TodoLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color);
`;

const TodoTitle = styled.div`
    background-color: var(--primary-background-color);
    color: var(--text-color);
    width: 100%;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    margin: 0 auto;
`;

const StyledAddItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;

    & > input {
        width: 600px;
        height: 2rem;
        font-size: 1.5rem;
        padding: 0.3rem;
        text-align: center;
    }
`;

export {
  TodoBox,
  ItemContainer,
  DecoratedTodoBox,
  DeleteButton,
  EditableInput,
  FlexContainer,
  TodoLayout,
  TodoTitle,
  StyledAddItem
};