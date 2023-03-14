import { Component } from "react";
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';


export default class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    name: '',
    number: '',
    filter: '',
  }
  
  addContact = (newContact) => {
    this.setState((prevState) => {
      return {
      contacts: [...prevState.contacts, newContact]
    }
    })
  }

  deleteContact = (id) => {
    this.setState((prevState) => {
      const updatedContacts = prevState.contacts.filter(contact => contact.id !== id);

      return { contacts:  updatedContacts}; 
    })
  }

  updateFilter = (value) => {
    this.setState({filter: value})
  }
    
  getFilterValue = () => {
    return this.state.filter;
  }

  filterContacts = () => {  
    const { contacts, filter } = this.state; 
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filter === "" ?  contacts : filteredContacts;
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form contacts={this.state.contacts} addContact={this.addContact} updateState={ this.updateState}  />
        {this.state.contacts.length !== 0 && <div><h2>Contacts</h2>
          <Filter getFilterValue={this.getFilterValue} updateFilter={ this.updateFilter} />
          <Contacts deleteContact={this.deleteContact} contacts={this.filterContacts()} /></div>}
      </div>
    )
  }
}