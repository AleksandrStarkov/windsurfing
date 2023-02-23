import {
  LinkStyled,
  List,
  ListWrapper,
  AccentLink,
  Li,
} from './AuthNav.styled';

function AuthNav({ closeMobMenu }) {
  return (
    <ListWrapper>
      <List>
        <Li>
          <AccentLink onClick={closeMobMenu} to="/login">
            Login
          </AccentLink>
        </Li>
        <Li>
          <LinkStyled onClick={closeMobMenu} to="/register">
            Registration
          </LinkStyled>
        </Li>
      </List>
    </ListWrapper>
  );
}

export default AuthNav;
