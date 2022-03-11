import { Item_type, ITEM_TYPE_DATE_INDEX } from '../type/general';

export const getRandomInt = (max: number, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
};

export const getRandomGameItem = (index: string): Item_type | null => {
  switch (index) {
    case '1':
      return ITEM_TYPE_DATE_INDEX['1'];
    case '2':
      return ITEM_TYPE_DATE_INDEX['2'];
    case '3':
      return ITEM_TYPE_DATE_INDEX['3'];
    case '4':
      return ITEM_TYPE_DATE_INDEX['4'];
    case '5':
      return ITEM_TYPE_DATE_INDEX['5'];
    default:
      return null;
  }
};

const winnerList = {
  [Item_type.ROCK]: [Item_type.PAPER, Item_type.SPOCK],
  [Item_type.SCISSOR]: [Item_type.ROCK, Item_type.SPOCK],
  [Item_type.PAPER]: [Item_type.SCISSOR, Item_type.LIZARD],
  [Item_type.LIZARD]: [Item_type.ROCK, Item_type.SCISSOR],
  [Item_type.SPOCK]: [Item_type.LIZARD, Item_type.PAPER],
};

export const calcPoint = (
  yourItem: null | Item_type,
  botItem: null | Item_type,
): boolean => {
  if (!yourItem || !botItem) return false;
  if (yourItem === botItem) return false;
  return !winnerList[yourItem].includes(botItem);
};
