import React, { Component } from 'react';
import {Container, TitleMain, TitleSec} from './App.styled'
import ContactForm from 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = e => {
    const {name, value} = e.currentTarget

    this.setState({ [name]: value });
  }

  render() {
    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm 
          name={this.state.name}
          number={this.state.number}
          onInputValue={this.handleChange}
        />

        <TitleSec>Contacts</TitleSec>
        {/* <Filter filter={this.state.filter} />
        <ContactList contacts={this.state.contacts} /> */}
      </Container>
    );
  }
  
};

export default App;
