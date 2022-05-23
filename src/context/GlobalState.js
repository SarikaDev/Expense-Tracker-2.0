import React, { createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';
// import UseLocalStorage from '../Hooks/useLocalStorage';
// Initial state

const initialState = {
  transactions: []
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  
  const initialValue = localStorage.getItem("Expense-Tracker") ? JSON.parse(localStorage.getItem("Expense-Tracker")) : initialState;
  const [state, dispatch] = useReducer(AppReducer, initialValue);

  useEffect(() => {
    localStorage.setItem("Expense-Tracker", JSON.stringify(state))
  }, [state])



  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}