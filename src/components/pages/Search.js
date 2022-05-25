import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/contacts/contactsActions';
import { getFilters } from 'redux/contacts/contactsSelectors';
import './Search.css';

export default function Search() {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();
  const handleSearchChange = e => {
    dispatch(filterAction(e.currentTarget.value));
  };
  return (
    <>
      <h5 className="searchBarHeader">Search</h5>
      <div className="searchbar_wrapper">
        <input
          type="text"
          className="searchbar"
          value={filter}
          onChange={handleSearchChange}
        />
      </div>
    </>
  );
}
