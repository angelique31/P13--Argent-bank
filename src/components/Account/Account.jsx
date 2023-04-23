import React from "react";
import {
  AccountWrapper,
  AccountContentWrapperCta,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountAmountDescription,
  TransactionButton,
} from "./AccountStyles";

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
