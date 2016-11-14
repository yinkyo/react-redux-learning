import React from 'react';

const Comment = (comment) => (
	<div className="comment">
		<p>
			<strong>{comment.user}</strong>
			{comment.text}
			<button className="remove-comment">&times;</button>
		</p>
	</div>
)

const Comments = ({comments}) => (
  <div className="comment">
	  {comments.map(
				(comment, i) => <Comment
					{...comment} key={i} i={i} />
			)}
	  <form ref="commentForm" className="comment-form">
	  	<input type="text" ref="author" placeholder="author"/>
	  	<input type="text" ref="comment" placeholder="comment"/>
	  	<input type="submit" hidden />
	  </form>
  </div>
)

export default Comments;
