import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, fetchUserProfile } from "../store/userSlice";

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
    // console.log("Remember me changed:", event.target.checked);
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
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="unique-email"
                value={email}
                autoComplete="new-email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="unique-password"
                value={password}
                autoComplete="new-password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {customError && <p className="error-message">{customError}</p>}
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
