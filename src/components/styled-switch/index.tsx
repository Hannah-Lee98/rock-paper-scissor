import React from 'react';
import styled from 'styled-components';
import { ACTION_TYPE, useGameStore } from '../../store/reducer';

const StyledSwitchWrapper = styled.div`
  --night: #34495e;
  --transition: all 0.5s ease;
  display: flex;
  justify-content: center;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .check-trail {
    display: flex;
    align-items: center;
    width: 3.5em;
    height: 2em;
    background: white;
    border-radius: 2.5em;
    transition: var(--transition);
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  .check-handler {
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 0;
    background: var(--night);
    border-radius: 50%;
    transition: var(--transition);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    &:before {
      content: url('/images/contrast.png');
      transform: scale(0.4);
      margin-top: 2px;
    }
  }

  input[type='checkbox']:checked + .check-trail {
    background: #7a8cbd;

    .check-handler {
      margin-left: 52%;
      background: var(--turquoise);

      &::before {
        content: url('/images/contrast.png');
        transform: scale(0.4);
        margin-top: 2px;
      }
    }
  }
`;

const StyledSwitch = () => {
  const { dispatch, state } = useGameStore();
  return (
    <StyledSwitchWrapper>
      <input
        checked={state.theme}
        id="chck"
        type="checkbox"
        onChange={() => {
          dispatch({ type: ACTION_TYPE.CHANGE_THEME });
        }}
      />
      <label htmlFor="chck" className="check-trail">
        <span className="check-handler" />
      </label>
    </StyledSwitchWrapper>
  );
};

export default StyledSwitch;
