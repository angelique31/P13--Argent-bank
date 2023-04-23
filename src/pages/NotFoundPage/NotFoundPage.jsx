import React from "react";
import {
  CenterPage,
  Title,
  TitleText,
  TitleReturn,
} from "./NotFoundPageStyles";

const NotFoundPage = () => {
  return (
    <div>
      <CenterPage>
        <Title>404</Title>
        <TitleText>Oups! La page que vous demandez n'existe pas.</TitleText>
        <TitleReturn to="/">Retourner sur la page d’accueil</TitleReturn>
      </CenterPage>
    </div>
  );
};

export default NotFoundPage;
