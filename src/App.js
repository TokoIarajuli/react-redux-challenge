import React from "react";
import BookForm from "./components/BookForm/BookForm";
import AllBooks from "./components/AllBooks/AllBooks";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllBooks} />
          <Route path="/addbooks" component={BookForm} />
          <Route path="/addbooks" component={AllBooks} />
        </Switch>
      </div>
    );
  }
}
export default App;
