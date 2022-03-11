import styled from 'styled-components';

export const TriangleWrapper = styled.div`
  width: fit-content;
  height: auto;
  position: relative;
  margin-top: 5rem;
  .game-icon {
    position: absolute;
  }
  .rock-icon {
    bottom: -40px;
    right: -34px;
  }
  .scissor-icon {
    top: -10px;
    left: 50px;
  }
  .paper-icon {
    bottom: -40px;
    left: -34px;
  }
`;
