export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state, // Copia el estado actual para preservar las propiedades no modificadas
        transactions: [...state.transactions, action.payload], // Agrega la nueva transacción al array de transacciones
      };
    case "DEL_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          //actualiza la propiedad transaction del estado con un nuevo array
          (transaction) => transaction.id != action.payload //true para todos los que NO coinciden
          // Filtra el array de transacciones para eliminar la transacción cuyo ID coincide con el ID en action.payload
        ),
      };

    default:
      return state; // Retorna el estado actual si la acción no coincide con ningún caso
  }
};
