import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

function TransactionList() {
  //recorre el estado "transactions" y lo muestra en pantalla
  const { transactions } = useGlobalState();
  const reverseTransactions = transactions.slice().reverse();

  return (
    <>
      <h3 className="text-2xl font-bold w-full block">History</h3>
      <ul className="max-h-32 overflow-y-auto">
        {reverseTransactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
