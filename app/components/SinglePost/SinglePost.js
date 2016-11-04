import React from 'react';

function PostCard({post}) {
	return (
		<article className="card">
			<h2 className="post-title">{post.title.rendered}</h2>
			<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
		</article>
	)
}

const SinglePost = ({ post }) => {
	return (
		<div><PostCard key={post.id} post={post} /></div>
	)
};

export default SinglePost;