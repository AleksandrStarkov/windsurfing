import React from 'react';
import { NavList, NavListItem, NavLinkItem } from './Nav.styled';

const links = [
  {
    label: 'News',
    path: '/news',
  },
  {
    label: 'Find pet',
    path: '/notices/sell',
  },
  {
    label: 'Our friends',
    path: '/friends',
  },
];

function Nav({ closeMobMenu }) {
  return (
    <nav>
      <NavList>
        {links.map(({ label, path }) => (
          <NavListItem key={label}>
            <NavLinkItem onClick={closeMobMenu} to={path}>
              {label}
            </NavLinkItem>
          </NavListItem>
        ))}
      </NavList>
    </nav>
  );
}

export default Nav;
