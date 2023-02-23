import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'utils/device';

export const LogoContainer = styled(Link)`
  @media ${device.tablet} {
    margin-right: auto;
  }
  @media ${device.desktop} {
    margin-right: 0;
  }
`;

export const LogoImg = styled.img`
  width: 82px;
  height: 42px;

  @media ${device.tablet} {
    width: 94px;
    height: 48px;
  }
`;
