import React from 'react';

class NewsletterClosed extends React.Component {
	constructor() {
		super();
	}
	closePop = {
		outerDiv: {
			border: '2px solid #202020',
			borderRadius: '15px',
			width: '10%',
			animation: 'closeNewsletter 2s',
		},
		innerDiv: {
			animation: 'noShadow 2s',
		},
		topColThree: {
			visibility: 'hidden',
		},
		circle: {
			visibility: 'hidden',
		},
	};
	envelope = {
		fontSize: '2em',
		cursor: 'pointer',
	};

	render() {
		return (
			<div id={'outerDiv'} style={this.closePop.outerDiv}>
				<div id={'top-col-one'} style={this.closePop.topColOne}></div>
				<div id={'top-col-two'} style={this.closePop.topColTwo}></div>
				<div
					id={'top-col-three'}
					style={this.closePop.topColThree}
					onClick={this.props.handleClick}
				>
					<i className='fas fa-times-circle' style={this.closePop.circle}></i>
				</div>
				<i
					style={this.envelope}
					className={'far fa-envelope'}
					onClick={this.props.handleClick}
					onMouseEnter={this.props.handleHover}
				></i>
			</div>
		);
	}
}

export default NewsletterClosed;
