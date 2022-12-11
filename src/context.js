// create a context (Warehouse)
// Provider
// Consumer / UseContext
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialstate = {
  intro: " ",
  about1: ``,
  about2: ``,
  about3: ``,
};

const AppProvider = ({ children }) => {
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        intro: " Welcome to",
        about1: `We're a Software Solutions Company. We offer `,
        about2: `Solutions in Web, Android and Native Domain.`,
        about3: `Reputated Company since 1990's.`,
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        intro: `  `,
        about1: "Industry experts since 1990's. Provided service",
        about2: "to more than 10000+ software solutions and",
        about3: "we've industry experts in every software field.",
      },
    });
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Global Custom Hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
