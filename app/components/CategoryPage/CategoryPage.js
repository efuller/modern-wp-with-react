import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';

const styles = {
	root: {
		marginBottom: '20px',
		padding: '20px'
	}
};

function PostCard({categoryPost}) {
	return (
		<Paper style={styles.root}>
			<article className="card">
				<Link to={`/story/${categoryPost.slug}`}>
					<h2 className="post-title">{categoryPost.title.rendered}</h2>
				</Link>
				<div dangerouslySetInnerHTML={{__html: categoryPost.excerpt.rendered}}/>
			</article>
		</Paper>
	)
}

const CategoryPage = ({ categoryPosts }) => {
	return (
		<div>{categoryPosts.map((categoryPost) => ( <PostCard key={categoryPost.id} categoryPost={categoryPost} />))}</div>
	)
};

export default CategoryPage;