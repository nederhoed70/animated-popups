import React from 'react';

class NewsletterOpen extends React.Component {
	constructor() {
		super();
	}

	openPop = {
		outerDiv: {
			position: 'absolute',
			zIndex: 1,
			left: '20%',
			top: '20%',
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gridTemplateRows: 'repeat(6, 1fr)',
			width: '50%',
			animation: 'openNewsletter 2s',
		},
		innerDiv: {
			gridColumn: '1 / -1',
			gridRow: '2 / 4',
			border: '2px solid #202020',
			borderRadius: '15px',

			animation: 'dropShadow 2s',
		},

		topColThree: {
			textAlign: 'right',
			marginRight: '0.3em',
			transition: 'all 5.5s ease',
			cursor: 'pointer',
		},
	};

	envelope = {
		fontSize: '2em',
		cursor: 'pointer',
	};

	render() {
		return (
			<div id={'outerDiv'} style={this.openPop.outerDiv}>
				<div id={'top-col-one'} style={this.openPop.topColOne}></div>
				<div id={'top-col-two'} style={this.openPop.topColTwo}></div>
				<div
					id={'top-col-three'}
					style={this.openPop.topColThree}
					onClick={this.props.handleClick}
				>
					<i className='fas fa-times-circle'></i>
				</div>
				<div id={'innerDiv'} style={this.openPop.innerDiv}>
					<i
						style={this.envelope}
						className={'far fa-envelope-open'}
						onClick={this.props.handleClick}
						onMouseEnter={this.props.handleHover}
					></i>
				</div>
			</div>
		);
	}
}

export default NewsletterOpen;
