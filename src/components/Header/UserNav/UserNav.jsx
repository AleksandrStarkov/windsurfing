import React from 'react';
import { AccentLink } from '../AuthNav/AuthNav.styled';
import { ReactComponent as Account } from '../../../assets/icons/account_logo.svg';
import { AccountLinkWrapper } from './UserNav.styled';

function UserNav({ closeMobMenu }) {
  return (
    <AccountLinkWrapper>
      <AccentLink
        onClick={closeMobMenu}
        style={{ padding: '9px 30px' }}
        to="/user"
      >
        <Account alt="account logo" style={{ marginRight: '14px' }} />
        Account
      </AccentLink>
    </AccountLinkWrapper>
  );
}

export default UserNav;
