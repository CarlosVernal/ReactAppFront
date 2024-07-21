import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount); //array que contiene solo valores numericos

  const total = amounts.reduce((acc, item) => (acc += item), 0); //acumula en total la suma de todos los elementos del array
  //" acc =0  " con ->  " ,0) "  al final. si no se especifica acc toma como valor el primer elemento del array
  return (
    <div className="flex justify-between items-center w-full">
      <h4>Your current balance is: </h4>
      <h1> ${total}</h1>
    </div>
  );
}

export default Balance;
