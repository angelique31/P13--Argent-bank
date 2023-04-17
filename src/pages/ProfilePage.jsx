import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile, updateUserProfile } from "../store/userSlice";
import EditableName from "../components/EditableName";
import styled from "styled-components";
import "../css/main.css";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Account from "../components/Account";
import accountData from "../data/accounData";

const Name = styled.span`
  font-size: 1.5rem;
`;

const MainProfile = styled.main`
  background-color: #e0e6ed;
  padding: 30px;
`;

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

  const handleNameUpdate = async (newName) => {
    const jwtToken = localStorage.getItem("jwtToken");
    const updatedProfile = {
      firstName: newName.split(" ")[0],
      lastName: newName
        .split(" ")
        .slice(1)
        .join(" "),
    };

    dispatch(updateUserProfile({ token: jwtToken, updatedProfile })); // Appeler l'action updateUserProfile

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
      <Navbar showLogout={true} displayName={displayName} />
      {error && <p className="error-message">Error: {error}</p>}
      {/* <main className="main bg-dark"> */}
      <MainProfile>
        <div className="header">
          <h1 className="profile-title">
            Welcome back <br /> <Name>{displayName}</Name>
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
        {accountData.map((account) => (
          <Account
            // concatène le titre et le numéro de compte, pour obtenir une clé unique pour chaque élément, même si les numéros de compte sont identiques
            key={`${account.title}-${account.accountNumber}`}
            title={account.title}
            accountNumber={account.accountNumber}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </MainProfile>
      <Footer />
    </>
  );
};
export default ProfilePage;
