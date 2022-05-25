import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from 'redux/contacts/contactsOperations';
import AppBar from './AppBar/AppBar';
import Contacts from './pages/Contacts';
import HomeView from './pages/HomeView';
import Login from './pages/Login';
// import NotFound from './pages/NotFound';
import Registration from './pages/Registration';

export const App = () => {
  const dispatch = useDispatch();
  const chekForToken = useSelector(state => Boolean(state.auth.token));

  useEffect(() => {
    // console.log('begore');
    // console.log('chekForToken: ', chekForToken);
    if (chekForToken) {
      // console.log('after');
      dispatch(getCurrentUser());
    }
  }, [chekForToken, dispatch]);

  const isAuth = useSelector(state => state.auth.isLoggedIn);
  // console.log('isAuth: ', isAuth);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        {!isAuth ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/contacts" />} />
          </>
        )}
      </Routes>
    </>
  );
};
