import React from "react";
import './Contacts.scss';
import Contact from "./Contact";
// import "../App.scss";

export function ContactHeaderList(props) {
	return <span className="contact__data">{props.text}</span>;
}

export function ContactAvatar(props) {
	return <span className="contact__avatar" />;
}

class Contacts extends React.Component {
	render() {
		return (
		<section data-testid="contacts" className="container">
			{/* Inside Contact, we'll return the type of filters */}
			<Contact>{this.props.children}</Contact>
		</section>
		);
		//return (<div />);
	}
}

export default Contacts;
