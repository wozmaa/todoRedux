import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";


const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = {
  todos: [
    {
      text: "сделать уроки",
      done: false,
    },
    {
      text: "пойти в магазин",
      done: false,
    },
    {
      text: "подготовить рюкзак",
      done: false,
    },
  ],
}

export const reducer = (state = initialState,  action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
      todos: [
       {
          text: action.payload,
          done: false
        }, ...state.todos, 
      ]
    }
    case "remove":
      return {
        ...state,
        todos: [
          ...state.todos.filter((item, index) => {
          if(index !== action.payload.id){
            return true
          }
        })
      ]
      }
      
    default: 
      return state
  }
}

const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
