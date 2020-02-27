import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<footer className="App-footer">
				<ul className="footer-list">
					<li className="footer-item">
						PRIVACY POLICY
            </li>
					<li className="footer-item">
						WWW.ANILIMAGES.COM
            </li>      
				</ul>
			</footer>
		)
	}

}

const mapStateToProps = () => {
	return {
		
	}
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
