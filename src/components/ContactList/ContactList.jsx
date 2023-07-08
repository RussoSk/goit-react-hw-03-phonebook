import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            {contact.name} : <span>{contact.number}</span>
            <button onClick={() => onDeleteContact(contact.id)} className={css.ContactBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };

  
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};