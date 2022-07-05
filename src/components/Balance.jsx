import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { BsBank2 } from 'react-icons/bs';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    

    return (
        <>
            <h3>Your  Balance  </h3>

            <h1>   {total} /-  <BsBank2 fontSize={30} />  </h1>
        </>
    )
}