import styled from 'styled-components';
import { THEME } from '../../type/general';

export const ContainerWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  &.light {
    background: ${THEME.LIGHT.BODY_BG} no-repeat;

    button {
      background: ${THEME.LIGHT.BUTTON.Primary.BTN_BG};
      color: ${THEME.LIGHT.BUTTON.Primary.TEXT};
      border-color: ${THEME.LIGHT.BUTTON.Primary.BORDER_COLOR};

      &:hover {
        background: ${THEME.LIGHT.BUTTON.Primary.HOVER.BG};
      }
      &.outlined {
        background: ${THEME.LIGHT.BUTTON.Outlined.BTN_BG};
        color: ${THEME.LIGHT.BUTTON.Outlined.TEXT};
        border-color: ${THEME.LIGHT.BUTTON.Outlined.BORDER_COLOR};

        &:hover {
          background: ${THEME.LIGHT.BUTTON.Outlined.HOVER.BG};
        }
      }
    }

    label,
    h1,
    h2,
    span,
    div {
      color: ${THEME.LIGHT.TEXT_COLOR};
    }
  }

  &.dark {
    background: ${THEME.DARK.BODY_BG} no-repeat;

    button {
      background: ${THEME.DARK.BUTTON.Primary.BTN_BG};
      color: ${THEME.DARK.BUTTON.Primary.TEXT};
      border-color: ${THEME.DARK.BUTTON.Primary.BORDER_COLOR};

      &:hover {
        background: ${THEME.DARK.BUTTON.Primary.HOVER.BG};
        border-color: ${THEME.DARK.BUTTON.Primary.HOVER.BG};
      }
      &.outlined {
        background: ${THEME.DARK.BUTTON.Outlined.BTN_BG};
        color: ${THEME.DARK.BUTTON.Outlined.TEXT};
        border-color: ${THEME.DARK.BUTTON.Outlined.BORDER_COLOR};

        &:hover {
          background: ${THEME.DARK.BUTTON.Outlined.HOVER.BG};
        }
      }
    }

    label,
    h1,
    h2,
    span,
    div {
      color: ${THEME.DARK.TEXT_COLOR};
    }
  }
`;
