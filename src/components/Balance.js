import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");

  let isNegative = num < 0;

  let formattedNumber = p[0]
    .split("")
    .reverse()
    .reduce(function (acc, num, i) {
      return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
    }, "");

  return (isNegative ? "-$ " : "$ ") + formattedNumber + "." + p[1];
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};
