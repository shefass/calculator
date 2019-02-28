import React, { Component } from "react";
import "./App.css";
import { pushReducer } from "./redux/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Index from "./components/Index";

const store = createStore(pushReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
        <Index />
      </Provider>
    );
  }
}

export default App;
