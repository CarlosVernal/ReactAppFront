import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  //recorre el estado "transactions" y lo muestra en pantalla
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <ul>
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <p>{transaction.category}</p>
            <span>{transaction.amount}</span>
            <button
              onClick={() => {
                deleteTransaction(transaction.id);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default TransactionList;
