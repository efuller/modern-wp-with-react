import React from 'react';
import { Link } from 'react-router';

function NavLinks({category}) {
	return (
		<Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to={`/category/${category.slug}`}>{category.name}</Link>
	)
}

const Navigation = ({categories}) => {
	return ! categories.length
	?   <div>Loading</div>
	:	<nav className="bt bb tc mw8 center mt4">
			{categories.map((category) => (
				<NavLinks key={category.id} category={category} />
			))}
		</nav>
};

export default Navigation;