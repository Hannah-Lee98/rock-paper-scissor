import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ScoreCom from '../../components/score/ScoreCom';
import Pentagon from '../../components/pentagon';
import { OnGameWrapper } from './style';
import { ContainerWrapper } from '../../components/styled-component-wrapper';
import PageHead from '../../components/header/PageHead';
import { ACTION_TYPE, useGameStore } from '../../store/reducer';
import Triangle from '../../components/triangle';
import { Item_type } from '../../type/general';
import {
  LizardCircleIcon,
  PaperCircleIcon,
  RockCircleIcon,
  ScissorCircleIcon,
  SpockCircleIcon,
} from '../../components/cicle-item/GameIcon';
import { calcPoint, getRandomGameItem, getRandomInt } from '../../utils';
import LoadingGameItem from '../../components/loading-game-item/LoadingGameItem';
import ModalRule from '../../components/rules/ModalRule';
import Nav from '../../components/header/Nav';
import Button from '../../components/button/Button';
import CircleShadow from '../../components/circle-shadow';

export const renderItem = (itemType: null | Item_type): ReactNode => {
  switch (itemType) {
    case Item_type.LIZARD:
      return <LizardCircleIcon />;
    case Item_type.PAPER:
      return <PaperCircleIcon />;
    case Item_type.ROCK:
      return <RockCircleIcon />;
    case Item_type.SCISSOR:
      return <ScissorCircleIcon />;
    case Item_type.SPOCK:
      return <SpockCircleIcon />;
    case null:
    default:
      return;
  }
};

const OnGame = () => {
  const { state, dispatch } = useGameStore();
  const [yourChosenItem, setYourChosenItem] = useState<null | Item_type>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [robotsChosenItem, setRobotsChosenItem] = useState<null | Item_type>(
    null,
  );

  const handleChoseItem = useCallback((item: Item_type) => {
    setYourChosenItem(item);
  }, []);

  useEffect(() => {
    if (yourChosenItem) {
      setIsLoading(true);
      setRobotsChosenItem(
        getRandomGameItem(getRandomInt(state.gameType).toString()),
      );
    }
  }, [state.gameType, yourChosenItem]);

  const doYouWin = useMemo(() => calcPoint(yourChosenItem, robotsChosenItem), [
    robotsChosenItem,
    yourChosenItem,
  ]);
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(s => !s);
  };

  const handlePlayAgain = useCallback(() => {
    setYourChosenItem(null);
    setRobotsChosenItem(null);
  }, []);

  const handleResetScore = useCallback(() => {
    dispatch({ type: ACTION_TYPE.RESET_SCORE });
    handlePlayAgain();
  }, [dispatch, handlePlayAgain]);

  useEffect(() => {
    if (!isLoading || !robotsChosenItem) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
      if (doYouWin) dispatch({ type: ACTION_TYPE.ADD_SCORE });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, doYouWin, isLoading, robotsChosenItem]);

  return (
    <>
      <PageHead title={'Play Game'} />
      <ContainerWrapper className={`${state.theme ? 'dark' : 'light'}`}>
        <Nav />
        <OnGameWrapper>
          <ScoreCom />
          {yourChosenItem && (
            <section className={'result-section'}>
              <div className={'side aside-result-section'}>
                <label>You Picked</label>

                {doYouWin && !isLoading ? (
                  <CircleShadow>{renderItem(yourChosenItem)}</CircleShadow>
                ) : (
                  <div>{renderItem(yourChosenItem)}</div>
                )}
              </div>
              {!isLoading && (
                <div className={'side main-result-section'}>
                  <div className={'result-label'}>
                    <label>
                      {doYouWin
                        ? 'YOU WIN'
                        : yourChosenItem === robotsChosenItem
                        ? 'EQUAL'
                        : 'YOU LOSE'}
                    </label>
                  </div>
                  <Button
                    onClick={handlePlayAgain}
                    style={{ padding: '0.5rem 2.5rem' }}
                  >
                    PLAY AGAIN
                  </Button>
                  {!!state.score && (
                    <Button
                      onClick={handleResetScore}
                      type={'outlined'}
                      style={{
                        padding: '0.5rem 2.5rem',
                        fontSize: '0.85rem',
                        marginTop: '1rem',
                      }}
                    >
                      RESET SCORE
                    </Button>
                  )}
                </div>
              )}
              <div className={'side aside-result-section'}>
                <label>The House Picked</label>
                {isLoading ? (
                  <LoadingGameItem />
                ) : !doYouWin && yourChosenItem !== robotsChosenItem ? (
                  <CircleShadow>{renderItem(robotsChosenItem)}</CircleShadow>
                ) : (
                  <div>{renderItem(robotsChosenItem)}</div>
                )}
              </div>
            </section>
          )}

          {!yourChosenItem &&
            (state.gameType === 5 ? (
              <Pentagon handleChoseItem={handleChoseItem} />
            ) : (
              <Triangle handleChoseItem={handleChoseItem} />
            ))}
          <div className={'footer-section'}>
            <Button type={'outlined'} onClick={toggleModal}>
              RULES
            </Button>
          </div>
        </OnGameWrapper>
        <ModalRule open={openModal} onClose={toggleModal} />
      </ContainerWrapper>
    </>
  );
};

export default OnGame;
