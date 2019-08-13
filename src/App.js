import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Register from "./components/Register/Register";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/addbooks" component={Wrapper} />
        </Switch>
      </div>
    );
  }
}
export default App;
