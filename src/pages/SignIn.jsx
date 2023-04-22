import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, fetchUserProfile } from "../store/actions/userActions";
import React, { useEffect } from "react";

// import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import styled from "styled-components";

const Main = styled.main`
  background-color: #e0e6ed;
  padding: 30px;
  flex: 1;
`;

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const Icon = styled.i`
  font-size: 3rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const RememberMe = styled.div`
  display: flex;
`;

const RememberMeLabel = styled(Label)`
  margin-left: 0.25rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: 600;
`;

const SignInButton = styled.button`
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

/**
 * Formulaire de connexion permettant aux utilisateurs de saisir leur email et mot de passe pour se connecter à l'application.
 * Case à cocher pour enregistrer les informations d'identification de l'utilisateur pour les connexions futures.
 *
 * Sign-in form that allows users to enter their email and password to log in to the application.
 * Checkbox to store user credentials for future logins.
 *
 */

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  // gérer la case à cocher "Remember me" :
  const [rememberMe, setRememberMe] = React.useState(false);
  // Ajouter un état pour gérer le message d'erreur personnalisé :
  const [customError, setCustomError] = React.useState("");

  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  // const isLogged = useSelector((state) => state.user.isLogged);

  // useEffect(() => {
  //   if (!isLogged) {
  //     navigate("/login");
  //   }
  // }, [isLogged, navigate]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  React.useEffect(() => {
    if (localStorage.getItem("rememberMe") === "true") {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      if (storedEmail) setEmail(storedEmail);
      if (storedPassword) setPassword(storedPassword);
      setRememberMe(false);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Liste des emails autorisés
    const allowedEmails = ["tony@stark.com", "steve@rogers.com"];

    // Vérifier si l'email entré est autorisé
    if (!allowedEmails.includes(email)) {
      // console.error("Email non autorisé");
      setCustomError("This email is not allowed");
      return;
    }

    try {
      const token = await dispatch(loginUser({ email, password })).unwrap();
      localStorage.setItem("jwtToken", token);
      await dispatch(fetchUserProfile(token)).unwrap();
      navigate("/profile");

      if (rememberMe) {
        localStorage.setItem("rememberMe", true);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        // console.log("Remember me is checked, email saved:", email);
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        // console.log("Remember me is not checked, email not saved");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Main>
        <SignInContent>
          <Icon className="fa fa-user-circle sign-in-icon"></Icon>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="unique-email"
                value={email}
                autoComplete="new-email"
                onChange={handleEmailChange}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="unique-password"
                value={password}
                autoComplete="new-password"
                onChange={handlePasswordChange}
              />
            </InputWrapper>
            {/* <div className="input-remember"> */}
            <RememberMe>
              <Input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <RememberMeLabel htmlFor="remember-me">
                Remember me
              </RememberMeLabel>
            </RememberMe>
            {/* {customError && <p className="error-message">{customError}</p>} */}
            {customError && <ErrorMessage>{customError}</ErrorMessage>}
            {/* <button className="sign-in-button" type="submit"> */}
            <SignInButton type="submit">Sign In</SignInButton>
            {error && <p className="error-message">{error}</p>}
          </form>
        </SignInContent>
      </Main>
      <Footer />
    </>
  );
}

export default SignIn;
