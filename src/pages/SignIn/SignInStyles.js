import styled from "styled-components";

export const Main = styled.main`
  background-color: #e0e6ed;
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

export const Icon = styled.i`
  font-size: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

export const RememberMe = styled.div`
  display: flex;
`;

export const RememberMeLabel = styled(Label)`
  margin-left: 0.25rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 600;
`;

export const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out 0s;
  &:hover {
    color: black;
    transform: scale(1.03);
  }
`;
