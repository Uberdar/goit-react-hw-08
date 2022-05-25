import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/auth/authOperations';

import { getItems } from 'redux/contacts/contactsSelectors';
// import { addAction } from '../../redux/actions/action';

export default function Phonebook() {
  const contacts = useSelector(getItems);
  // console.log('contacts: ', contacts);
  const dispatch = useDispatch();

  const firstFormNameId = nanoid();
  const firstFormNumberId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.some(
      elem => elem.name === name && elem.phone === number
    );
    // console.log('isContactExist: ', isContactExist);
    if (isContactExist) {
      return;
    }
    dispatch(addContacts({ name, number }));
  };

  return (
    <>
      <h1 className="contactHeader">Add New Contact</h1>
      <form className="addinfo_div" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={firstFormNameId}>
          Name
          <input
            type="text"
            id={firstFormNameId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor={firstFormNumberId}>
          Tel
          <input
            id={firstFormNumberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" className="add_btn">
          Add Contact
        </button>
      </form>
    </>
  );
}
