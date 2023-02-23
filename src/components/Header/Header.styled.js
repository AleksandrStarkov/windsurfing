import styled from 'styled-components';
import { device } from 'utils/device';

export const HeaderStyled = styled.header`
  position: relative;
  z-index: 90;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.burgerBackground};

  @media ${device.fabletAndMobileOnly} {
    padding: 20px 20px 16px;
    margin-bottom: 22px;
  }

  @media ${device.tablet} {
    align-items: baseline;
    padding: 20px 32px;
    margin-bottom: 72px;
  }

  @media ${device.desktop} {
    padding: 20px 16px;
    margin-bottom: 39px;
  }
`;

export const MobMenuButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;

  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const ModalWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 46px auto 0;

  @media ${device.tablet} {
    margin-top: 88px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    gap: 25px;
  }

  @media ${device.desktop} {
    gap: 80px;
  }
`;
