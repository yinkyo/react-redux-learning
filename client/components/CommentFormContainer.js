import React from 'react';
import Comments from './Comments';

const CommentForm = ({ onSubmit }) => (
  <div className="comment">
	  <form ref="commentForm" className="comment-form" onSubmit={onSubmit}>
	  	<input type="text" ref="author" placeholder="author"/>
	  	<input type="text" ref="comment" placeholder="comment"/>
	  	<input type="submit" hidden />
	  </form>
  </div>
);

const CommentFormContainer = React.createClass({
  render() {
    const i = this.props.posts.findIndex(
      (post) => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    const comment = this.props.comments[post.code] ? this.props.comments[post.code] : []
    return (
      <Comments
      	comments={comment} />
    )
  }
});

export default CommentFormContainer;
