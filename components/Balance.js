import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

function Balance() {
  const { allExpenses } = useContext(TransactionContext)

  const amounts = allExpenses.map(transaction => transaction.amount)
  console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance