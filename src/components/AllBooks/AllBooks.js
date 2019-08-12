import React from "react";
import "./AllBooks.scss";
import { connect } from "react-redux";
import Book from "../Book/Book";
import EditComponent from "../EditComponent/EditComponent";
class AllPost extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Date</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
        </table>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <EditComponent post={post} key={post.id} />
            ) : (
              <Book post={post} key={post.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPost);
