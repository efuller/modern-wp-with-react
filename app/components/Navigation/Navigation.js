import React from 'react';
import { Link } from 'react-router';

function NavLinks({category}) {
	return (
		<li><Link to={`/category/${category.slug}`}>{category.name}</Link></li>
	)
}

const Navigation = ({categories}) => {
	return ! categories.length
	?   <div>Loading</div>
	:   <div className="navbar-container">
			<nav className="container navbar">
				<ul className="menu">
					{categories.map((category) => (
						<NavLinks key={category.id} category={category} />
					))}
				</ul>
			</nav>
		</div>
};

export default Navigation;