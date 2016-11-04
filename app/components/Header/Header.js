import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="site-header">
			<div className="site-branding">
				<Link to="/">Modern WP with React</Link>
			</div>
		</header>
	)
};

export default Header;