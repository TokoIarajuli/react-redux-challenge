import * as actionTypes from "../actions/ActionTypes";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return state.concat([action.data]);
    case actionTypes.DELETE_BOOK:
      return state.filter(post => post.id !== action.id);
    case actionTypes.EDIT_BOOK:
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case actionTypes.UPDATE:
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            bookTitle: action.data.newBookTitle,
            author: action.data.newAuthor,
            date: action.data.newDate,
            price: action.data.newPrice,
            editing: !post.editing
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
