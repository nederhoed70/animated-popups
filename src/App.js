import React from 'react';
import Newsletter from './components/Newsletter';

import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			newsletter: {
				status: false,
			},
		};
	}
	setStatus = (item, status) => {
		this.setState({
			[item]: {
				status: status,
			},
		});
	};

	render() {
		return (
			<div className='App'>
				<Newsletter
					newsletter={this.state.newsletter}
					setStatus={this.setStatus}
				/>
			</div>
		);
	}
}

export default App;
