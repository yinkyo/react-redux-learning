import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const PhotoDetail = (post) => (
  <div className="single-photo">
    <Photo
      {...post} i={post.i}
      onClick={post.onClick}
      comment={post.comment} />
    <Comments />
  </div>
);

export default PhotoDetail;
