import { removeContacts } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getFilters, getItems } from 'redux/contacts/contactsSelectors';

export default function TodoRender() {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilters);
  const items = useSelector(getItems);
  const filtereditems = items.filter(elem =>
    elem.name.toLocaleLowerCase().includes(filtered.toLocaleLowerCase())
  );

  const rendernewElem = () => {
    // console.log('items: ', items);
    return filtereditems.map(elem => {
      return (
        <div key={elem.id}>
          <span>name: {elem.name} </span>
          <span>number: {elem.number} </span>
          <button
            type="button"
            id={elem.id}
            onClick={() => dispatch(removeContacts(elem.id))}
          >
            Delete
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <h2>Contacts</h2>
      {rendernewElem()}
    </>
  );
}
