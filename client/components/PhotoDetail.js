import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import CommentFormContainer from './CommentFormContainer';

const PhotoDetail = (post) => (
  <div className="single-photo">
    <Photo
      {...post} i={post.i}
      onClick={post.onClick}
      comment={post.comment} />
    <Comments comments={post.comment} />
    <CommentFormContainer />
  </div>
);

export default PhotoDetail;
