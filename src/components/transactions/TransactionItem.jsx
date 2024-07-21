import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="py-1 px-3 mb-2 bg-zinc-600 text-white w-full flex justify-between items-center rounded-lg">
      <p className="text-sm">{transaction.category}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
