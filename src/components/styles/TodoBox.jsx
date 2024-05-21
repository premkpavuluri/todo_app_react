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

export default TodoBox;