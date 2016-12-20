import React from 'react';
import { Link } from 'react-router';

function NavLinks({category}) {
	return (
		<Link
			activeClassName="active-link"
			className="f6 f5-l link bg-animate black-80 dib pa3 ph4-l"
			to={`/category/${category.slug}`}>
				{category.name}
		</Link>
	)
}

const Navigation = ({categories}) => {
	return ! categories.length
	?   null
	:	<nav className="bt bb tc mw8 center">
			{categories.map((category) => (
				<NavLinks key={category.id} category={category} />
			))}
		</nav>
};

export default Navigation;