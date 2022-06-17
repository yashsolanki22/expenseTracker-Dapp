import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

function Transaction({ transaction, index }) {

  const { deleteTransaction } = useContext(TransactionContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={ transaction.amount < 0 ? 'minus' : 'plus' }>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                          <button onClick={() => deleteTransaction(index)} className='delete-btn'>x</button>
    </li>
  )
}

export default Transaction