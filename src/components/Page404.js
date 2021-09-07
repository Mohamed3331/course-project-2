import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<>
			<h1>404 ERROR</h1>
			<h1 >
				<Link to="/">Return to Home Page</Link>
			</h1>
		</>
	);
}

export default PageNotFound;