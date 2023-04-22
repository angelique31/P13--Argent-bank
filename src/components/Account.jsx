import React from "react";
import styled from "styled-components";

const AccountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapperCta = styled.div`
  @media (min-width: 720px) {
    flex: 0;
  }
`;

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`;

const Account = ({ title, accountNumber, amount, description }) => {
  return (
    <AccountWrapper>
      <AccountContentWrapper>
        <AccountTitle>
          {title} ({accountNumber})
        </AccountTitle>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>{description}</AccountAmountDescription>
      </AccountContentWrapper>
      <AccountContentWrapperCta>
        <TransactionButton>View transactions</TransactionButton>
      </AccountContentWrapperCta>
    </AccountWrapper>
  );
};

export default Account;
