import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Library from "./components/Library/index"



const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store.getState", store.getState());
});
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
       
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/library"><Library/></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
