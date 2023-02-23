import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'utils/device';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 80px;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.body};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.cap};
  color: ${({ theme }) => theme.colors.black};

  @media ${device.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
    transition: color ${({ theme }) => theme.animation.cubic};
    text-decoration: underline;
  }
`;
