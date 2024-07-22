import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    //recive el evento al presionar el boton en el formulario
    e.preventDefault(); // Previene la recarga de la página
    const id = window.crypto.randomUUID(); //windows el objeto global del navegador (la ventana), crypto propiedad que porporciona acceso a una API de criptografia y randomUUID genera una ID randoms de 128 bits
    addTransaction({ id, category, amount: +amount }); //uso de la funcion con los datos capturados en el formulario (id provisional)
    //amount: +amount -> convierte el valor de amount en un numero aunque reciva un string "200"
    setAmount("");
    setCategory("");
    location.reload()
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="">
        <input
          className="py-2 px-3 bg-zinc-600 text-white block my-2 rounded-lg w-full"
          id="category"
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          className="py-2 px-3 bg-zinc-600 text-white block my-2 rounded-lg w-full"
          id="amount"
          type="number"
          step={0.1}
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button className="py-2 px-3 mb-2 block my-2 rounded-lg w-full bg-yellow-500 text-black  ">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
