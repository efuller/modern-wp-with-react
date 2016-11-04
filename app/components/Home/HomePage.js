import React from 'react';
import { Link } from 'react-router';

function PostCard({post}) {
	return (
		<article className="card">
			<Link to={`/story/${post.slug}`}>
				<h2 className="post-title">{post.title.rendered}</h2>
			</Link>
			<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
		</article>
	)
}


const HomePage = ({posts}) => {
	return (
		<div>
			{posts.map((post) => ( <PostCard key={post.id} post={post} /> ))}
		</div>
	)
};

export default HomePage;