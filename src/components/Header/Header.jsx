import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectAccessToken } from 'redux/auth/authSelectors';
import useScrollLock from 'hooks/useScrollLock';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import { HeaderStyled } from './Header.styled';

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const isLogin = useSelector(selectIsLoggedIn);
  const isAuth = useSelector(selectAccessToken);

  const { lockScroll, UnlockScroll } = useScrollLock();

  const toggleMenu = () => {
    if (mobileMenuIsOpen) return closeMobMenu();
    setMobileMenuIsOpen(true);
    lockScroll();
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
    UnlockScroll();
  };

  return (
    <HeaderStyled>
      {isLogin && isAuth ? (
        <LoggedIn
          closeMobMenu={closeMobMenu}
          mobileMenuIsOpen={mobileMenuIsOpen}
          toggleMenu={toggleMenu}
        />
      ) : (
        <NotLoggedIn
          closeMobMenu={closeMobMenu}
          mobileMenuIsOpen={mobileMenuIsOpen}
          toggleMenu={toggleMenu}
        />
      )}
    </HeaderStyled>
  );
}

export default Header;
