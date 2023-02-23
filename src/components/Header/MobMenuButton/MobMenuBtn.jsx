import { MobMenuButton } from '../Header.styled';
import burger from '../../../assets/icons/burger.svg';
import close from '../../../assets/icons/icon-close.svg';

function MobMenuBtn({ toggleMenu, mobileMenuIsOpen }) {
  return (
    <>
      <MobMenuButton
        type="button"
        aria-label="burger-menu"
        onClick={toggleMenu}
      >
        <img
          src={mobileMenuIsOpen ? close : burger}
          alt="burger-menu-icon"
          width={30}
          height={20}
        />
      </MobMenuButton>
    </>
  );
}
export default MobMenuBtn;
