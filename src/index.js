import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './scss/index.scss';


const reducers = (state = intialState, action) => {
  switch(action.type){
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalContent: action.payload
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        modalContent: ""
      };
    case "SET_WORD":
      return {
        ...state,
        currentWord: action.payload
      };
    default:
      return state;
  }
}

let intialState = {
  isModalOpen: false,
  modalContent: "",
  currentWord: ""
}

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);