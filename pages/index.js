
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpenses from '../components/IncomeExpenses'
import TransactionList from '../components/TransactionList'
import AddTransaction from '../components/AddTransaction'
import { TransactionProvider } from '../context/TransactionContext' 


export default function Home() {

  return (
    <TransactionProvider>
    <Header />
    <div className={styles.container}>
      <Balance />
      <IncomeExpenses />
      <TransactionList /> 
      <AddTransaction />
    </div>
  </TransactionProvider>
  )
}
