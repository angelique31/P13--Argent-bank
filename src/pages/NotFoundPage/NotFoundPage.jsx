import React from "react";
import {
  CenterPage,
  Title,
  TitleText,
  TitleReturn,
} from "./NotFoundPageStyles";
import Navbar from "../../components/NavBar/NavBar";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <CenterPage>
        <Title>404</Title>
        <TitleText>Oups! La page que vous demandez n'existe pas.</TitleText>
        <TitleReturn to="/">Retourner sur la page d’accueil</TitleReturn>
      </CenterPage>
    </div>
  );
};

export default NotFoundPage;
