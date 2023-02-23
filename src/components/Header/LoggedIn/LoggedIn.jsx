import useMatchMedia from '../../../hooks/useMatchMedia';
import Logo from '../Logo';
import Nav from '../Nav';
import UserNav from '../UserNav';
import MobMenuBtn from '../MobMenuButton';
import MobMenuOpen from '../MobMenuOpen';
import { Wrap } from '../Header.styled';

function LoggedIn({ closeMobMenu, mobileMenuIsOpen, toggleMenu }) {
  const { isDesktop, isTablet } = useMatchMedia();

  return (
    <>
      <Wrap>
        <Logo onClick={closeMobMenu} />
        {isTablet && !mobileMenuIsOpen && <UserNav />}
        {isDesktop ? (
          <>
            <Nav />
            <UserNav />
          </>
        ) : (
          <MobMenuBtn
            toggleMenu={toggleMenu}
            mobileMenuIsOpen={mobileMenuIsOpen}
          />
        )}
      </Wrap>

      {/* ----------Mobile menu is open---------- */}
      {!isDesktop && mobileMenuIsOpen && (
        <MobMenuOpen closeMobMenu={closeMobMenu} />
      )}
    </>
  );
}
export default LoggedIn;
