import React from 'react';
import { Link } from 'react-router';

function ContentNavigation(props) {
	return (
		<div className={`content-link black-80 ${props.direction === 'next' ? 'next' : 'previous'}`}>
			{
				props.type === 'category'
				? <Link className="black-80" to={`/category/${props.destination.slug}`}>
						{
							props.direction === 'next'
								? <div>&rang;</div>
								: <div>&lang;</div>
						}
					</Link>
				: <Link className="black-80" to={`/story/${props.destination.slug}`}>
						{
							props.direction === 'next'
							? <div>&rang;</div>
							: <div>&lang;</div>
						}
					</Link>
			}
		</div>
	)
}

export default ContentNavigation;