import logo from '../../../assets/icons/petly.svg';
import { LogoContainer, LogoImg } from './Logo.styled';

function Logo({ onClick }) {
  return (
    <LogoContainer onClick={onClick} to="/">
      <LogoImg src={logo} alt="Logo" />
    </LogoContainer>
  );
}

export default Logo;
