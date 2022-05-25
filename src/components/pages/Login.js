import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

export default function Login() {
  //   const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const firstFormNameId = nanoid();
  const firstFormNumberId = nanoid();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <h1>Login</h1>
      <form className="addinfo_div" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={firstFormNameId}>
          Login
          <input
            type="text"
            id={firstFormNameId}
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor={firstFormNumberId}>
          Password
          <input
            id={firstFormNumberId}
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
          Submit
        </button>
      </form>
    </>
  );
}
