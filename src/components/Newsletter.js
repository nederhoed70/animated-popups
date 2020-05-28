import React from 'react';
import NewsletterOpen from './pops/NewsletterOpen';
import NewsletterClosed from './pops/NewsletterClosed';

class Newsletter extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick = () => {
		this.props.newsletter.status
			? this.props.setStatus('newsletter', false)
			: this.props.setStatus('newsletter', true);
	};
	handleHover = () => {
		console.log('hover');
	};
	render() {
		let statusSwitch = !this.props.newsletter.status ? (
			<NewsletterClosed
				key={'closed'}
				newsletter={this.props.newsletter}
				handleClick={this.handleClick}
				handleHover={this.handleHover}
			/>
		) : (
			<NewsletterOpen
				key={'open'}
				newsletter={this.props.newsletter}
				handleClick={this.handleClick}
				handleHover={this.handleHover}
			/>
		);
		return statusSwitch;
	}
}

export default Newsletter;
