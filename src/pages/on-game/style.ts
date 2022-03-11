import styled from 'styled-components';
import { screenSize } from '../../type/general';

interface IOnGameWrapper {
  theme?: boolean;
}

export const OnGameWrapper = styled.div<IOnGameWrapper>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .result-section {
    flex: 1;
    width: min(650px, 100%);
    display: flex;
    align-items: center;
    .side {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    label {
      font-size: 18px;
      margin-bottom: 2rem;
      font-weight: 300;
    }
    .result-label {
      margin-bottom: 1rem;
      label {
        font-size: 40px;
        text-transform: uppercase;
      }
    }
  }

  .footer-section {
    flex: 1;
    width: min(1200px, 100%);
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .empty-item {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: gray;
  }
  .result-title {
    font-size: 20px;
    margin-bottom: 1rem;
    &.dark {
      color: white;
    }
    &.light {
      color: black;
    }
  }
  .play-again-btn {
    font-size: 1rem;
  }

  @media only screen and ${screenSize.medium} {
    .result-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .aside-result-section {
      grid-row: 1;
    }
    .main-result-section {
      grid-column: 1/3;
      grid-row: 2;
    }
  }
`;
