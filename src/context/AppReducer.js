export const deleteTransaction ='DELETE_TRANSACTION';
export const  addTransaction ='ADD_TRANSACTION';

export const AppReducer= (state, action) => {
    switch(action.type) {
      case deleteTransaction:
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case addTransaction:
        return {
          ...state,
          transactions: [...state.transactions,action.payload ]
        }
    

      default:
        return state;
    }
  }