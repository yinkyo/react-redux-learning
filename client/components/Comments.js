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
  </div>
)

export default Comments;
