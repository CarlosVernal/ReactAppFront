import { useGlobalState } from "../context/GlobalState";
import { VictoryLabel, VictoryPie } from "victory";
function ExpenseChart() {
  const { transactions } = useGlobalState();
  const incomes = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (item > 0 ? (acc += item) : acc), 0);
  const expense =
    transactions
      .map((transaction) => transaction.amount)
      .reduce((acc, item) => (item < 0 ? (acc += item) : acc), 0) * -1;
  const incomesPercentaje = Math.round((incomes * 100) / (incomes + expense));
  console.log(incomesPercentaje);
  console.log(100 - incomesPercentaje);
  return (
    <div className="flex w-fit">
      <VictoryPie
        data={[
          { x: "Incomes", y: incomesPercentaje },
          { x: "Expenses", y: 100 - incomesPercentaje },
        ]}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
        labels={({ datum }) => `$${datum.y.toFixed(0)}%`}
        colorScale={["#22c553", "#ef4444"]}
        animate={{ duration: 2000 }}
      />
    </div>
  );
}

export default ExpenseChart;
