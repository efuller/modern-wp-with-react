import React from 'react';
import { Link } from 'react-router';

function ContentNavigation(props) {
	return (
		<div className={`category-link ${props.direction === 'next' ? 'next' : 'previous'}`}>
			{
				props.type === 'category'
				? <Link to={`/category/${props.destination.slug}`}>{props.destination.name}</Link>
				: <Link to={`/story/${props.destination.slug}`}>{props.destination.title.rendered}</Link>
			}
		</div>
	)
}

export default ContentNavigation;