import { Component } from "react";

export default class Contacts extends Component {
  onClick = ({ target }) => {
    const { deleteContact } = this.props;

    const id = target.parentElement.getAttribute('data-key');
    deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

    return <ul>
      {contacts.map((contact) => { return <li key={contact.id} data-key={contact.id }>{contact.name} : { contact.number} <button onClick={this.onClick}>Delete</button></li>})}
    </ul>
  }
};