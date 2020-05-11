import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import Loading from "./components/Loading";
import Container from "./components/Container";
import Button from "./components/Button";
import Topbar, {TopbarLogo} from "./components/Topbar"; 
import Contacts from "./components/Contacts";
import { ContactImage, ContactInformation, orderContacts, ContactData } from "./components/Contact";
import Filters, {FilterSearch, Input} from "./components/Filters";

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loading: false
    };
    console.log("Constructor");
  }

  fetchDataFromApi(url) { /* Create component to do the fetch */
    fetch(url)
    .then(response => response.json()) /* Return a promise */
    .then(result => {
      this.setState( {
        contacts: result,
        originalContacts: result,
        loading: false,
        filterClicked: false });
      console.log(this.state.contacts);
    })
    .catch(err => {
      /* Treat if any promises fail */
      console.error("Failed retrieving information", err); 
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState( { loading: true });

    this.fetchDataFromApi("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts");
  }

  componentDidUpdate() {
    console.log("DidUpdate");
  }

  componentWillUnmount() {
    console.log("WillUnmount");
  }

  handleClickOrderBy(orderBy) {

    let newContacts = orderContacts(this.state.contacts, orderBy);

    this.setState({
      contacts: newContacts,
    });
  }

  handleTypewrite (event) {
    let newContacts = [];

    /* Let's loop through the original array, so that "contacts" can be updated correctly */
    this.state.originalContacts.map(contact => {
      /* If what the user searched, exists in any contact */
      if(contact.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1){
        /* Let's update the list of searched contacts */
        newContacts.push(contact);
      }
    });

    this.setState({
      contacts: newContacts
    });
}

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <Topbar>
            <TopbarLogo>
              <LogoSvg alt="Logo Instagram" />
            </TopbarLogo>
        </Topbar>

          <Filters>
            <FilterSearch>
              <Input handleTypewrite={(event) => this.handleTypewrite(event)}/>
              <Button class="filters__search__icon" iClass="fa fa-search"/>
            </FilterSearch>
            <Button text="Nome" handleClick={() => this.handleClickOrderBy("name")} classExtension="is-selected"/>
            <Button text="País" handleClick={() => this.handleClickOrderBy("country")}/>
            <Button text="Empresa" handleClick={() => this.handleClickOrderBy("company")}/>
            <Button text="Departamento" handleClick={() => this.handleClickOrderBy("department")}/>
            <Button text="Data de admissão" handleClick={() => this.handleClickOrderBy("admissionDate")}/>
          </Filters>

        <Container>
          { /* In Contacts we'll return the type of filters we can apply */}
          <Contacts/>
            <section>
              {
                /* Here we'll return the data for all of the contacts */
                this.state.contacts.map(contact => {
                  return (
                    <ContactInformation key={contact.id}>
                      <ContactImage path={contact.avatar}/>
                      <ContactData info={contact.name}/>
                      <ContactData info={contact.phone}/>
                      <ContactData info={contact.country}/>
                      {/* So that it will show "2019-04-08" instead of 2019-04-08T19:28:41.878Z */}
                      <ContactData info={contact.admissionDate.slice(0,10)}/>
                      <ContactData info={contact.company}/>
                      <ContactData info={contact.department}/>
                    </ContactInformation>
                  );
                })
              }
            </section>
          </Container>
      </React.Fragment>
    )
  }
}

export default App;
