import React from "react";
import ReactDOM from "react-dom/client";
import { PokemonApp } from "./PokemonApp";
import { store } from "./store";
import { Provider } from "react-redux";
import { TodoApp } from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <TodoApp/> */}
      <PokemonApp/>
    </Provider>
  </React.StrictMode>
);
