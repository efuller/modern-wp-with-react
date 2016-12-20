import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="bg-white black-80 tc pv4 avenir">
			<Link to="/" className="black-80">
				<h1 className="mt2 mb0 baskerville i fw1 f1">Modern WordPress</h1>
				<h2 className="mt2 mb0 f6 fw4 ttu tracked">Powered by React & Redux</h2>
			</Link>
		</header>
	)
};

export default Header;