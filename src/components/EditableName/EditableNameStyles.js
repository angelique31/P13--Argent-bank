import styled from "styled-components";

export const Input = styled.input`
  width: 100px;
  ::placeholder {
    color: #c4c4c4;
  }
  @media (min-width: 420px) {
    width: 200px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Buttons = styled.button`
  width: 70px;
  padding: 5px;
  color: blue;
  background-color: white;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  border: none;
  &:hover {
    transform: scale(1.06);
  }
  &:focus {
    box-shadow: 0px 0px 3px 1px blue;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out 0s;
  &:hover {
    color: black;
    transform: scale(1.03);
  }
`;

export const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;
