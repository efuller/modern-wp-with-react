import React from 'react';
import { Link } from 'react-router';


function PostCard({categoryPost}) {
	return (
		<article className="card">
			<Link to={`/story/${categoryPost.slug}`}>
				<h2 className="post-title">{categoryPost.title.rendered}</h2>
			</Link>
			<div dangerouslySetInnerHTML={{__html: categoryPost.excerpt.rendered}}/>
		</article>
	)
}

const CategoryPage = ({ categoryPosts }) => {
	return (
		<div>{categoryPosts.map((categoryPost) => ( <PostCard key={categoryPost.id} categoryPost={categoryPost} />))}</div>
	)
};

export default CategoryPage;