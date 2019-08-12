import React from "react";
import BookForm from "./BookForm/BookForm";
import AllBooks from "./AllBooks/AllBooks";

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <BookForm />
        <AllBooks />
      </div>
    );
  }
}

export default Wrapper;
