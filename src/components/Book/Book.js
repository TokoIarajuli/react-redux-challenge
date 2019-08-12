import React from "react";
import "./Book.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actions/ActionTypes";

class Post extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>{this.props.post.bookTitle}</td>
            <td>{this.props.post.author}</td>
            <td>{this.props.post.date}</td>
            <td>{this.props.post.price + "$"} </td>

            <button
              onClick={() =>
                this.props.dispatch({
                  type: actionTypes.EDIT_BOOK,
                  id: this.props.post.id
                })
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: actionTypes.DELETE_BOOK,
                  id: this.props.post.id
                })
              }
            >
              Delete
            </button>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default connect()(Post);
