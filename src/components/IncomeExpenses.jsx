import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  


  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income </h4>
        <p className="money plus">{income} Rs <FaSortAmountUp /></p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense} Rs <FaSortAmountDown /></p>

      </div>
      {/* <TransactionChart /> */}

    </div>
  )
}