import React from "react";
import "./EditComponent.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actions/ActionTypes";

class EditComponent extends React.Component {
  handleEdit = e => {
    e.preventDefault();
    const newBookTitle = this.getBookTitle.value;
    const newAuthor = this.getAuthor.value;
    const newDate = this.getDate.value;
    const newPrice = this.getPrice.value;

    const data = {
      newBookTitle,
      newAuthor,
      newDate,
      newPrice
    };
    this.props.dispatch({
      type: actionTypes.UPDATE,
      id: this.props.post.id,
      data: data
    });
  };
  render() {
    return (
      <div key={this.props.post.id}>
        <form onSubmit={this.handleEdit} className="edit_form_wrapper">
          <input
            required
            type="text"
            ref={input => (this.getBookTitle = input)}
            defaultValue={this.props.post.bookTitle}
            placeholder="Book Title"
          />
          <input
            required
            ref={input => (this.getAuthor = input)}
            defaultValue={this.props.post.author}
            placeholder="Book Author"
          />
          <input
            required
            ref={input => (this.getDate = input)}
            defaultValue={this.props.post.date}
            placeholder="Publish Date"
          />
          <input
            required
            ref={input => (this.getPrice = input)}
            defaultValue={this.props.post.price}
            placeholder="Price"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
