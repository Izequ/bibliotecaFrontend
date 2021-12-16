import React from "react";
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import Layout from "./components/layout/layout";

const Biblioteca = () => {
  return (
   
       <Provider store={ store }>
   
       <AppRouter />

       </Provider>
   )
  
};

export default Biblioteca;
