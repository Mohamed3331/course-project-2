import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthedUser } from '../actions/authedUser';
import Avatar from './Avatar';

function NavigationBar(props) {
	const { user, dispatch } = props;

	const Logout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<>
			<Navbar expand="lg" bg="light" variant="light" >
				<Navbar.Brand as={Link} to="/">
					<h2>
						<small>Would You Rather?</small>
					</h2>
				</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Leaderboard
						</Nav.Link>
					</Nav>
					<Nav className="align-items-start">
						<Navbar.Text>{user.name}</Navbar.Text>
						<Avatar avatarURL={user.avatarURL} />
						<Button
							variant="outline-dark"
							onClick={Logout}
							className="mt-3 mt-lg-0"
						>
							Logout
						</Button>
					</Nav>
			</Navbar>
		</>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
