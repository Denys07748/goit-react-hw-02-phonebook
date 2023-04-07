import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {Container, TitleMain, TitleSec} from './App.styled'
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = contactData => {
    console.log(contactData);
    const contact = {
      id: nanoid(10),
      ...contactData,
    }
    console.log(contact);
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  }

  render() {
    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm 
          onSubmit={this.addContact}
        />

        <TitleSec>Contacts</TitleSec>
        {/* <Filter filter={this.state.filter} /> */}
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
  
};

export default App;
