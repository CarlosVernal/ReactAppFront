import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";

function App() {
  return (
    <GlobalProvider>
      {/*componente global que proveera (Provider) los valores para la aplicacion*/}
      <Header />
      {/* Componente donde se mostrara el balance*/}
      <Balance />
      {/* Componente donde se realizaran los calculos de gatos e ingresos*/}
      <TransactionForm />
      {/* Componente para ingresar valores*/}
      <h1>Hello</h1>
      <TransactionList />
    </GlobalProvider>
  );
}

export default App;
