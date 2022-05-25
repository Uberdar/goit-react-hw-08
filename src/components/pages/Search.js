import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/contacts/contactsActions';
import { getFilters } from 'redux/contacts/contactsSelectors';

export default function Search() {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();
  const handleSearchChange = e => {
    dispatch(filterAction(e.currentTarget.value));
  };
  return (
    <>
      <input type="text" value={filter} onChange={handleSearchChange} />
    </>
  );
}
