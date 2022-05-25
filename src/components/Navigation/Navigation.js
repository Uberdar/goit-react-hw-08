import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperations';
import { getLoggedIn, getUsername } from 'redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getLoggedIn);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  const logoOutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <nav>
      <NavLink to="/">Main</NavLink>
      {isLoggedIn ? (
        <>
          <h3>Hello User {username}</h3>
          <button onClick={logoOutHandler}> Logout button </button>
          <NavLink to="/contacts"> Contacts </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/registration"> Registration </NavLink>
          <NavLink to="/login"> Login </NavLink>
        </>
      )}
    </nav>
  );
}
