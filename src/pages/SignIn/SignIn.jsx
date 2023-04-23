import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, fetchUserProfile } from "../../store/actions/userActions";
// import React, { useEffect } from "react";

import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import {
  Main,
  SignInContent,
  Icon,
  InputWrapper,
  Label,
  Input,
  RememberMe,
  RememberMeLabel,
  ErrorMessage,
  SignInButton,
} from "./SignInStyles";

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
