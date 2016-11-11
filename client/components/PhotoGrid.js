import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => (
	<div className="photo-grid">
		{props.posts.map(
			(post, i) => <Photo 
				{...post} key={i} i={i}
				comment={props.comments[post.code] ? props.comments[post.code] : []} />
		)}
	</div>
);

export default PhotoGrid;