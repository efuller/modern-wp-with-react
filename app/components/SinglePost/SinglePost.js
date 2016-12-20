import React from 'react';

function PostCard({post}) {
	return (
		<article className="mw8 center w-100 avenir">
			<img src={`${post.thumbnail}`} className="center w-100 f5" alt={`${post.title.rendered}`} />
			<h1 className="baskerville f2 fw1">{post.title.rendered}</h1>
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