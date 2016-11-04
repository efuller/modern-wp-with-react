import React from 'react';
import Paper from 'material-ui/Paper';

function PostCard({post}) {
	return (
		<Paper>
			<article className="card">
				<h2 className="post-title">{post.title.rendered}</h2>
				<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
			</article>
		</Paper>
	)
}

const SinglePost = ({ post }) => {
	return (
		<div><PostCard key={post.id} post={post} /></div>
	)
};

export default SinglePost;