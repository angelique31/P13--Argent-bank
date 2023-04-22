import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CenterPage = styled.div`
  text-align: center;
  @media screen and (max-width: 400px) {
    margin-top: 200px;
  }
`;

const Title = styled.h1`
  color: #00bc77;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 10rem;
  margin-top: 66px;
  @media screen and (max-width: 750px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 5rem;
  }
`;

const TitleText = styled.p`
  color: #00bc77;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 66px;
  margin-bottom: 60px;
  @media screen and (max-width: 750px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

const TitleReturn = styled(NavLink)`
  color: rgba(255, 1, 1, 1);
  font-family: "Roboto", sans-serif;
  font-size: 1.12rem;
  font-weight: 500;
  padding-bottom: 80px;
  text-decoration: underline;
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

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
