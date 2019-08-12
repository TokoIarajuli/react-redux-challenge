import React from "react";
import AllBooks from "./components/AllBooks/AllBooks";
import { Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllBooks} />
          <Route path="/addbooks" component={Wrapper} />
        </Switch>
      </div>
    );
  }
}
export default App;
