import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const [category, setCategory] = useState();
  const [amount, setAmount] = useState(0);
  //useState para estados simples
  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    //recive el evento al presionar el boton en el formulario
    e.preventDefault(); // Previene la recarga de la página
    const id = window.crypto.randomUUID(); //windows el objeto global del navegador (la ventana), crypto propiedad que porporciona acceso a una API de criptografia y randomUUID genera una ID randoms de 128 bits
    addTransaction({ id, category, amount: +amount }); //uso de la funcion con los datos capturados en el formulario (id provisional) 
    //amount: +amount -> convierte el valor de amount en un numero aunque reciva un string "200"
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          id="category"
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          id="amount"
          type="number"
          step={0.1}
          placeholder="0.00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
