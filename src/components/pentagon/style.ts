import styled from 'styled-components';

export const PentagonWrapper = styled.div`
  width: fit-content;
  height: auto;
  position: relative;
  margin-top: 5rem;
  .game-icon {
    position: absolute;
  }
  .lizard-icon {
    top: -50px;
    right: 100px;
  }
  .spock-icon {
    top: 50px;
    left: -35px;
  }
  .rock-icon {
    bottom: -10px;
    left: 190px;
  }
  .scissor-icon {
    top: 50px;
    left: 235px;
  }
  .paper-icon {
    bottom: -10px;
    right: 182px;
  }
`;
