import React, { useEffect, useState } from "react";
import Logout from "../components/LogOut";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../store/userSlice";
import EditableName from "../components/EditableName";
import "../css/main.css";

const ProfilePage = () => {
  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.fullName);
    }
  }, [profile]);

  const handleNameUpdate = (newName) => {
    setDisplayName(newName);
  };

  const handleNameCancel = () => {};

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (!jwtToken) {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
      window.location.href = "/login";
    } else {
      // Récupérer le profil de l'utilisateur depuis l'API backend
      dispatch(fetchUserProfile(jwtToken));
    }
  }, [dispatch]);

  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="./assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle"></i>
            {displayName}
          </a>
          <Logout />
        </div>
      </nav>
      {error && <p className="error-message">Error: {error}</p>}
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {profile && (
              <EditableName
                fullName={profile.fullName}
                onSave={handleNameUpdate}
                onCancel={handleNameCancel}
              />
            )}
          </h1>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};
export default ProfilePage;
