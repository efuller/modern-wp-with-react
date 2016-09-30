import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';

const styles = {
	root: {
		marginBottom: '20px',
		padding: '20px'
	}
};

function PostCard({post}) {
	return (
		<Paper style={styles.root}>
			<article className="card">
				<Link to={`/story/${post.slug}`}>
					<h2 className="post-title">{post.title.rendered}</h2>
				</Link>
				<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
			</article>
		</Paper>
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