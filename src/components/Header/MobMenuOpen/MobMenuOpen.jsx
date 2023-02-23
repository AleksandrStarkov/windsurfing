import useMatchMedia from 'hooks/useMatchMedia';
import AuthNav from '../AuthNav';
import Nav from '../Nav';
import UserNav from '../UserNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { ModalWrapper } from '../Header.styled';

function MobMenuOpen({ closeMobMenu }) {
  const { isMobile } = useMatchMedia();
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <ModalWrapper>
      {isMobile &&
        (isLogin ? (
          <UserNav closeMobMenu={closeMobMenu} />
        ) : (
          <AuthNav closeMobMenu={closeMobMenu} />
        ))}
      <Nav closeMobMenu={closeMobMenu} />
    </ModalWrapper>
  );
}
export default MobMenuOpen;
