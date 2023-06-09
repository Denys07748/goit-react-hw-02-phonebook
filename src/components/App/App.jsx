import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {Container, TitleMain, TitleSec} from './App.styled'
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

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
    const isIncludes = this.state.contacts.some(({name}) => name.toLowerCase() === contactData.name.toLowerCase()); 
    if(isIncludes) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(10),
      ...contactData,
    }
  
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }))
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  };

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) => 
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm 
          onSubmit={this.addContact}
        />

        <TitleSec>Contacts</TitleSec>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
  
};

export default App;
