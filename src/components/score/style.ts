import styled from 'styled-components';

export const ScoreComWrapper = styled.div`
  border-radius: 8px;
  border: 2px solid white;
  padding: 14px;
  display: flex;
  width: min(500px, 100%);
  margin-left: 2rem;
  margin-right: 2rem;

  .left-section {
    flex: 1;
  }
  .item-name {
    display: block;
    color: white;
    text-transform: uppercase;
    font-size: 16px;
  }
  .right-section {
    width: 100px;
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
      color: hsl(229, 64%, 46%);
    }
    .score {
      display: block;
      font-size: 30px;
      color: hsl(229, 25%, 31%);
      text-align: center;
    }
  }
`;
