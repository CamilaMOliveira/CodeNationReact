import React from 'react';
import './Filters.scss';

export  function Input(props) {
	return (<input onInput={props.handleTypewrite} type="text" className="filters__search__input" placeholder="Pesquisar" />);
}

export function FilterSearch(props) {
	return (<div className="filters__search">{props.children}</div>);
}

class Filters extends React.Component {
	render() {
		return (
			<section data-testid="filters" className="container">
				<section className="filters">
					{this.props.children}
				</section>
			</section>
		);
	}
}

export default Filters;
