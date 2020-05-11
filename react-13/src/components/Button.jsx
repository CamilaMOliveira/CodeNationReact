import React from 'react';
import './Button.scss';
import './Filters.scss';

class Button extends React.Component {
  render() {
    let nameClass;
    let iClass;

    /* If we have passed a class name, use the class name */
    if(this.props.class) {
        nameClass = this.props.class;
    } else {
        /* Else, use the default class name */
        nameClass = "filters__item " + this.props.classExtension;
    }

    /* If we have passed a i class name, use the i class name */
    if(this.props.iClass) {
        iClass = this.props.iClass;
    } else {
        /* Else, use the default i class name */
        iClass = "fas fa-sort-down";
    }

    return (
        <button className={nameClass} onClick={this.props.handleClick}>{this.props.text}
          <i className={iClass}/>
        </button>);
  }
}

export default Button;