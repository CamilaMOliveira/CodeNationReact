import React from 'react';
import './Contacts.scss';
import { ContactHeaderList, ContactAvatar } from "./Contacts";

export function orderContacts(contacts, orderBy) {
  let orderedContacts;
  switch(orderBy) {
    case "name":
      orderedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "country":
      orderedContacts = contacts.sort((a, b) => a.country.localeCompare(b.country));
      break;
    case "company":
      orderedContacts = contacts.sort((a, b) => a.company.localeCompare(b.company));
      break;
    case "department":
      orderedContacts = contacts.sort((a, b) => a.department.localeCompare(b.department));
      break;
    case "admissionDate":
      /* So that we'll compare "2019-04-08" instead of 2019-04-08T19:28:41.878Z */
      orderedContacts = contacts.sort((a, b) => a.admissionDate.slice(0,10).localeCompare(b.admissionDate.slice(0,10)));
    break;
    default:
      orderedContacts = contacts;
  }

  return orderedContacts;
}

export function ContactInformation(props) {
  return <div className="contact__info">{props.children}</div>
  //return <p className="contact__data">{props.info}</p>
}

export function ContactImage(props) {
  return <img className="contact__avatar" src={props.path} alt="user-avatar"></img>
}

export function ContactData(props) {
  return (<p className="contact__data">{props.info}</p>);
}

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <ContactAvatar/>
        <ContactHeaderList text="Nome"/>
        <ContactHeaderList text="Telefone"/>
        <ContactHeaderList text="País"/>
        <ContactHeaderList text="Admissão"/>
        <ContactHeaderList text="Empresa"/>
        <ContactHeaderList text="Departamento"/>
      </article>
    );
  }
}

export default Contact;
