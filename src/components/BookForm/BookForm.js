import React from "react";
import "./BookForm.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actions/ActionTypes";

class PostForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const bookTitle = this.getBookTitle.value;
    const author = this.getAuthor.value;
    const date = this.getDate.value;
    const price = this.getPrice.value;

    const data = {
      id: new Date(),
      bookTitle,
      author,
      date,
      price,
      editing: false
    };

    if (price < 0) {
      alert("Price must be more than 0");
    } else if (date < 0) {
      alert("Sorry, forget about books written before Christ");
    } else {
      this.props.dispatch({
        type: actionTypes.ADD_BOOK,
        data
      });
      this.getBookTitle.value = "";
      this.getAuthor.value = "";
      this.getDate.value = "";
      this.getPrice.value = "";
    }
  };
  render() {
    return (
      <div className="post_form_container">
        <form onSubmit={this.handleSubmit} className="post_form_wrapper">
          <h1>Your Books</h1>
          <input
            required
            type="text"
            ref={input => (this.getBookTitle = input)}
            placeholder="Book Title"
          />
          <input
            required
            type="text"
            ref={input => (this.getAuthor = input)}
            placeholder="Book Author"
          />
          <input
            required
            type="number"
            ref={input => (this.getDate = input)}
            placeholder="Publish Date"
          />
          <input
            required
            type="number"
            ref={input => (this.getPrice = input)}
            placeholder="Price"
          />
          <button>ADD</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
