import React, { Component } from 'react';
import {Container, TitleMain, TitleSec} from './App.styled'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }


  render() {
    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm ... />

        <TitleSec>Contacts</TitleSec>
        <Filter ... />
        <ContactList ... />
      </Container>
    );
  }
  
};

export default App;
