import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext';
import Transaction from './Transaction';

function TransactionList() {
  const {allExpenses} = useContext(TransactionContext);
  console.log(allExpenses)

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {allExpenses.map((transaction, index) => (<Transaction 
                                                  key={transaction.index} 
                                                  transaction={transaction} 
                                                  index={index}
                                                  />))}
      </ul>
    </>
  )
}

export default TransactionList