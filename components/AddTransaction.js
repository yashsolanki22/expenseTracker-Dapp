import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';


function AddTransaction() {

  const { text, setText, amount, setAmount, addTransaction, getExpenses } = useContext(TransactionContext)

  console.log(text, amount)

  function onSubmit(e) {
    e.preventDefault()
    // amount = +amount;
    // console.log(text, amount)
    addTransaction();
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input 
          type='text' 
          placeholder='Enter text...'
          value={text}
          onChange={(e) => setText(e.target.value)}>
          </input>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount<br />
            (negative - expense, positive - income)
          </label>
          <input 
          type='number' 
          placeholder='Enter amount...'
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}>
          </input>
        </div>
        <button className='btn'>Add transaction</button>
      </form>
        <button
        onClick={getExpenses}
        className='btn'>Get Transaction</button>
    </>
  )
}

export default AddTransaction