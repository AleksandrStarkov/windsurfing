import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/device';

export const ListWrapper = styled.div`
  @media ${device.fabletAndMobileOnly} {
    margin-bottom: 60px;
  }
  @media ${device.desktop} {
    flex-grow: 1;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media ${device.desktop} {
    justify-content: flex-end;
    margin-left: 20px;
  }
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 28px;
  height: 44px;

  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.cap};

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radii.xxl};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.accent};

  @media ${device.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid #ff6101;
    transition: color ${p => p.theme.animation.cubic},
      border ${p => p.theme.animation.cubic};
  }
  @media ${device.desktop} {
    align-items: flex-end;
  }
`;

export const AccentLink = styled(LinkStyled)`
  display: flex;
  align-items: center;

  min-width: 95px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    transition: color ${p => p.theme.animation.cubic};
  }
`;
