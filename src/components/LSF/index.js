import styled from 'styled-components';
import { IconButton } from '../Button';

export const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 550px 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 1064px) {
    grid-template-columns: 450px 1fr;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    min-height: 0;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 32px;

  @media (max-width: 950px) {
    margin-top: 60px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  color: #959595;
  font-size: 14px;
`;

export const PageLink = styled.a`
  color: #4990ED;
  margin-left: 4px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;
`;

export const HomeButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;