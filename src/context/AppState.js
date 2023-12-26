import React from "react";
import AppContext from "./AppContext";


const AppState = (props) => {

  const test = true;
  
  return (
    <AppContext.Provider value={{ test }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
