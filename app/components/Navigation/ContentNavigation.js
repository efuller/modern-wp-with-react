import React from 'react';
import { Link } from 'react-router';

function ContentNavigation(props) {
	return (
		<div className={`category-link ${props.direction === 'next' ? 'next' : 'previous'}`}>
			<Link to={`/category/${props.category.slug}`}>{props.category.name}</Link>
		</div>
	)
}

export default ContentNavigation;