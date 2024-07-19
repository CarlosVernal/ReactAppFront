import { createContext, useContext, useReducer } from "react"; // Importa la función createContext de React
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [],
};

export const Context = createContext(); // Crea y exporta un objeto Context que contiene un "Provider" para proporcionar un valor y un "Consumer" para acceder a ese valor

export const useGlobalState = () => {
  //hook personalizado para el uso del contexto en otros componentes
  const context = useContext(Context);
  return context;
};
export const GlobalProvider = ({ children }) => {
  // Componente que envolverá a otros y proporcionará el contexto a los componentes hijos (children)

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider value={{ transaction: state.transaction }}>
      {children}
    </Context.Provider>
  ); // Envuelve los componentes hijos en el Provider del contexto
};
