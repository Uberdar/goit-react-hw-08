import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/auth/authOperations';
import Phonebook from './Phonebook';
import Search from './Search';
import TodoRender from './TodosRender';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  });
  return (
    <>
      <Phonebook />
      <Search />
      <TodoRender />
    </>
  );
}
