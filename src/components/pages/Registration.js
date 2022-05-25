import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

export default function Registration() {
  //   const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const regFormNameId = nanoid();
  const regFormEmailId = nanoid();
  const regFormPassId = nanoid();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = e => {
    // console.log('contacts: ', contacts);
    e.preventDefault();
    // const isContactExist = contacts.some(
    //   elem => elem.name === name && elem.number === number
    // );
    // // console.log('isContactExist: ', isContactExist);
    // if (isContactExist) {
    //   return;
    // }
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <>
      <h1>Registration</h1>
      <form className="addinfo_div" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={regFormNameId}>
          Name
          <input
            type="text"
            id={regFormNameId}
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor={regFormEmailId}>
          Email
          <input
            id={regFormEmailId}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor={regFormPassId}>
          Password
          <input
            id={regFormPassId}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" className="add_btn">
          Reg Button
        </button>
      </form>
    </>
  );
}
