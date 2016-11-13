import React from 'react';
import PhotoDetail from './PhotoDetail';

// import Comment from ./Comment;

const PhotoDetailContainer = React.createClass({
  render() {
    const i = this.props.posts.findIndex(
      (post) => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    const comment = this.props.comments[post.code] ? this.props.comments[post.code] : []
    return (
      <PhotoDetail
        {...post} i={i}
        onClick={this.props.increment.bind(null, i)}
        comment={comment} />
    )
  }
});

export default PhotoDetailContainer;
