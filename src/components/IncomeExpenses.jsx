import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  //console.log(amounts);
  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expenses =
    amounts
      .filter((amount) => amount <= 0)
      .reduce((acc, item) => (acc += item), 0) * -1;
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
        <p>{expenses}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
