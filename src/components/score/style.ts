import styled from 'styled-components';
import { Neutral } from '../../type/general';

export const ScoreComWrapper = styled.div`
  border-radius: 13px;
  border: 1px solid ${Neutral.HeaderOutline};
  padding: 14px;
  display: flex;
  width: min(500px, 95%);
  margin: 0 2rem;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);

  &.dark {
    border-color: white;
  }
  &.light {
    border-color: black;
    background: hsl(229, 25%, 31%);
    .score-section {
      border: 1px solid;
    }
    .item-name {
      color: white;
    }
  }

  .left-section {
    flex: 1;
  }
  .item-name {
    display: block;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 300;
    line-height: 20px;
  }
  .right-section {
    min-width: 100px;
  }
  .score-section {
    background: white;
    border-radius: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    .label {
      display: block;
      text-align: center;
      color: ${Neutral.ScoreText};
      font-size: 17px;
      font-weight: 100;
      margin-top: 0.5rem;
    }
    .score {
      display: block;
      font-size: 50px;
      color: ${Neutral.DarkText};
      text-align: center;
      font-weight: bold;
      padding: 0.5rem;
      padding-top: 0;
    }
  }
`;
