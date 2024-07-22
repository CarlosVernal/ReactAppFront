import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li
      className={`py-1 px-3 mb-2 text-white w-full flex justify-between items-center rounded-lg ${
        transaction.amount > 0 ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p className="text-sm capitalize">{transaction.category}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="px-2 mx-2 rounded-lg bg-red-500 opacity-50  text-black"
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
