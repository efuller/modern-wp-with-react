import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="site-header">
			<div className="site-branding">
				<h1>
					<Link to="/">Modern WP with React</Link>
				</h1>
			</div>
		</header>
	)
};

export default Header;