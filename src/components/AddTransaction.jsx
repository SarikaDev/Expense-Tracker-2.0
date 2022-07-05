import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [timeStamp, setTimeStamp] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      text,
      amount: parseInt(amount),
      timeStamp
    }
    addTransaction(newTransaction);
    setAmount(0);
    setText('');
    toast.success("Added Succesfully ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          <input type='date' onChange={(e) => setTimeStamp(e.target.value)} required />
        </div>
        <button className="btn" type='submit '>Add transaction</button>
      </form>
    </>
  )
}