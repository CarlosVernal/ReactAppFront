import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  //estado incial del useReducer
  transactions: [], //propiedad, clave o key que contiene un array o lista vacia
};

export const Context = createContext(); // Crea y exporta un objeto Context que proporciona un "Provider" para suministrar un valor y un "Consumer" (aunque no se usa explícitamente) para acceder a ese valor

export const useGlobalState = () => {
  //hook personalizado para el uso del contexto en otros componentes
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  // Componente que envolverá a otros y proporcionará el contexto a los componentes hijos (children)

  const [state, action] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions"); //esto se guarda en un string '[{id:1, category:.....}]'
    return localData
      ? JSON.parse(localData) /*lo convierte a json */
      : initialState /*{transactions:[]}*/;
  });
  //useReducer -> es ideal para manejar estados más complejos y transiciones de estado basadas en acciones.

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    // Función que crea una acción para agregar una transacción al estado
    action({
      type: "ADD_TRANSACTION", // Tipo de acción que indica al reducer que debe añadir una nueva transacción
      payload: transaction, // Datos de la transacción que se deben añadir al estado (lo que se pasa al reducer)
    });
  };

  const deleteTransaction = (id) => {
    // Función que crea una acción para agregar una transacción al estado
    action({
      type: "DEL_TRANSACTION", // Tipo de acción que indica al reducer que debe añadir una nueva transacción
      payload: id, // Datos de la transacción que se deben añadir al estado (lo que se pasa al reducer)
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  ); // Envuelve los componentes hijos en el Provider del contexto y proporciona los estados y la funciones a través del contexto, permitiendo que los componentes hijos accedan a estos valores sin necesidad de pasarlos explícitamente a través de cada nivel de la jerarquía de componentes
};
