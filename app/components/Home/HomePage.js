import React from 'react';
import { Link } from 'react-router';

function getStyles(img) {
	return !img ? {} : {
		background: `url(${img}) no-repeat center center`,
		backgroundSize: 'cover',
		height: '400px'
	}
}

function PostCard({post}) {
	return (
		<Link to={`/story/${post.slug}`}>
			<article className="card" style={getStyles(post.thumbnail)}>
				<div className="card-content">
					<h2 className="post-title">{post.title.rendered}</h2>
					<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
				</div>
			</article>
		</Link>
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