export const ROUTE = {
  HOME: '/',
  ON_GAME: '/on-game',
  NOT_FOUND: '/not-found',
};
export const Primary = {
  ScissorGradient: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
  PaperGradient: 'hsl(230, 89%, 62%), hsl(230, 89%, 65%)',
  RocGradient: 'hsl(349, 71%, 52%), hsl(349, 70%, 56%)',
  LizardGradient: 'hsl(261, 73%, 60%), hsl(261, 72%, 63%)',
  Cya: 'hsl(189, 59%, 53%), hsl(189, 58%, 57%)',
};
export const PrimaryShadow = {
  ScissorGradient: 'hsl(39,91%,46%)',
  PaperGradient: 'hsl(230,74%,57%)',
  RocGradient: 'hsl(349,71%,43%)',
  LizardGradient: 'hsl(261,67%,57%)',
  Cya: 'hsl(189,54%,47%)',
};

export const Neutral = {
  DarkText: 'hsl(229, 25%, 31%)',
  ScoreText: 'hsl(229, 64%, 46%)',
  HeaderOutline: 'hsl(217, 16%, 45%)',
};

export const size = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
  superLarge: 1650,
};

export const screenSize = {
  small: `(max-width: ${size.small}px)`,
  medium: `(max-width: ${size.medium}px)`,
  large: `(max-width: ${size.large}px)`,
  extraLarge: `(max-width: ${size.extraLarge}px)`,
  superLarge: `(max-width: ${size.superLarge}px)`,
};

// ### Background
//
// - Radial Gradient: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)

export enum Item_type {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSOR = 'SCISSOR',
  LIZARD = 'LIZARD',
  SPOCK = 'SPOCK',
}

export const ITEM_TYPE_DATE_INDEX = {
  1: Item_type.ROCK,
  2: Item_type.PAPER,
  3: Item_type.SCISSOR,
  4: Item_type.LIZARD,
  5: Item_type.SPOCK,
};

const COLOR = {
  DEEP_PURPLE: '#19015b',
  DEEP_BLUE: '#050626',
  LIGHT_BLUE: 'hsl(224, 34%, 61%))',
  WHITE: '#FFF',
};

export const THEME = {
  DARK: {
    TEXT_COLOR: COLOR.WHITE,
    BODY_BG: 'linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
    BG: COLOR.DEEP_BLUE,
    BUTTON: {
      Primary: {
        TEXT: COLOR.DEEP_BLUE,
        BTN_BG: COLOR.WHITE,
        BORDER_COLOR: COLOR.WHITE,
        HOVER: {
          BG: '#ffffffc4',
        },
      },
      Outlined: {
        TEXT: COLOR.WHITE,
        BTN_BG: COLOR.DEEP_BLUE,
        BORDER_COLOR: COLOR.WHITE,
        HOVER: {
          BG: COLOR.DEEP_PURPLE,
        },
      },
    },
  },
  LIGHT: {
    TEXT_COLOR: COLOR.DEEP_BLUE,
    BODY_BG: 'linear-gradient(hsl(217, 100%, 94%), hsl(224, 34%, 61%))',
    BG: 'rgba(255,255,255,0.55)',
    BUTTON: {
      Primary: {
        TEXT: COLOR.WHITE,
        BTN_BG: COLOR.DEEP_BLUE,
        BORDER_COLOR: COLOR.DEEP_BLUE,
        HOVER: {
          BG: COLOR.DEEP_PURPLE,
        },
      },
      Outlined: {
        TEXT: COLOR.DEEP_BLUE,
        BTN_BG: '#e8e8e8',
        BORDER_COLOR: COLOR.DEEP_BLUE,
        HOVER: {
          BG: COLOR.WHITE,
        },
      },
    },
  },
};
