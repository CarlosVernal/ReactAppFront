import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  //console.log(amounts);
  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expenses =
    amounts
      .filter((amount) => amount <= 0)
      .reduce((acc, item) => (acc += item), 0).toFixed(2) *-1;
    const finalExpenses= Math.abs(parseFloat(expenses)).toFixed(2)
  //   console.log(incomes);
  //   console.log(expenses);
  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{incomes}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expenses</h4>
        <p>{finalExpenses}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
