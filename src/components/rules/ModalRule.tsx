import React, { FC } from 'react';
import styled from 'styled-components';
import { useGameStore } from '../../store/reducer';
import Modal, { IModal } from '../modal';

const RuleWrapper = styled.div`
  background: white;
  padding: 2rem;
  img {
    height: auto;
    width: min(400px, 100%);
  }
`;

const ModalRule: FC<IModal> = props => {
  const { state } = useGameStore();
  const { open, onClose } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <RuleWrapper>
        {state.gameType === 3 ? (
          <img alt={'rule'} src={'/images/image-rules-3-items.svg'} />
        ) : (
          <img alt={'rule'} src={'/images/image-rules-5-items.svg'} />
        )}
      </RuleWrapper>
    </Modal>
  );
};

export default ModalRule;
