import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import PrivateApp from './components/PrivateApp';
import { handleInitialData } from './actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser } = this.props;
		
		return <>{!authedUser ? <Login /> : <PrivateApp />}</>;

	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser,
	};
}

export default connect(mapStateToProps)(App);
