import styled from 'styled-components';
import { device } from 'utils/device';

export const AccountLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }
  @media ${device.desktop} {
    margin-left: auto;
  }
`;
