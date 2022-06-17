import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'

function Header() {

  const { connectWallet } = useContext(TransactionContext)

  return (
    <div>
      <h2>Header</h2>
      <button
      onClick={connectWallet}
      >Connect Wallet</button>
    </div>
  )
}

export default Header