import styled from "styled-components";

export const ContainerInput = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1em;
  margin: 2.7em 0;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

  input {
    background-color: transparent;
    border: none;
    font-size: 1.3em;
    color: #FFF;
    outline: none;
    margin-right: .5em;
  }

  input::placeholder {
    color: #f1f1f1;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5s;
  }

  button:hover {
    transform: scale(1.4);
  }
`;
