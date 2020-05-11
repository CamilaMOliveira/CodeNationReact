import React from 'react';
import Container from "./Container";
import './Topbar.scss';

export function TopbarLogo(props) {
return (<a href="/" className="topbar__logo">{props.children}</a>);
}

class Topbar extends React.Component {
	render() {
		return (
		<header data-testid="topbar" className="topbar">
			<Container>
				{this.props.children}
			</Container>
		</header>);
	}
}

export default Topbar;