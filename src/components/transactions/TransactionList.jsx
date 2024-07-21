import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

function TransactionList() {
  //recorre el estado "transactions" y lo muestra en pantalla
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-2xl font-bold w-full block">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
