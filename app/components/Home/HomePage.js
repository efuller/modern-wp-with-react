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
		<article className="bt bb b--black-10">
			<Link className="db pv4 ph3 ph0-l no-underline black dim" to={`/story/${post.slug}`}>
				<div className="flex flex-column flex-row-ns">
					<div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
						<img src={`${post.thumbnail}`} className="db" />
					</div>
					<div className="w-100 w-60-ns pl3-ns">
						<h1 className="f3 fw1 baskerville mt0 lh-title">{post.title.rendered}</h1>
						<p className="f6 f5-l lh-copy" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
					</div>
					</div>
			</Link>
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