import styled from 'styled-components';

interface IHomeWrapper {
  theme?: boolean;
}

export const HomeWrapper = styled.div<IHomeWrapper>`
  .main-section > div {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
  }
  .choose-type-game-section {
    label {
      color: ${p => (!p.theme ? 'black' : 'white')};
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    button {
      &:first-child {
        margin-right: 1rem;
      }
    }
  }

  .start-btn {
    animation: scale-animation 2s infinite ease-in-out;
  }
  .type-game-btn {
    :hover {
      transform: scale(1.05);
    }
  }
  @keyframes scale-animation {
    from {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.05);
    }
    to {
      transform: scale(0.9);
    }
  }
`;
