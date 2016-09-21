import React from 'react';

function NavLinks({category}) {
	return (
		<li>{category.name}</li>
	)
}

const Navigation = ({categories}) => {
	return ! categories.length
	?   <div>Loading</div>
	:   <div className="navbar-container">
			<nav className="container nav-bar">
				<ul className="menu">
					{categories.map((category) => (
						<NavLinks key={category.id} category={category} />
					))}
				</ul>
			</nav>
		</div>
};

export default Navigation;