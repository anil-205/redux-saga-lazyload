import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<header className="App-header">
				<ul className="head-list">
					<li className="head-item">
						Home
            </li >
					<li className="head-item">
						MY ACCOUNT
            </li>
					<li className="head-item">
						SETTINGS
            </li>  
	      </ul>
			</header>
		)
	}

}

const mapStateToProps = () => {
	return {
		
	}
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
