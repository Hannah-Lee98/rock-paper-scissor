import React, { FC, HTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';

export interface IModal {
  open?: boolean;
  onClose: () => void;
}

const Modal: FC<IModal & HTMLAttributes<Element>> = props => {
  const { open, onClose, ...rest } = props;

  const handleCLick = useCallback(
    e => {
      if (e.target.className.includes('modal-container')) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <ModalWrapper
      className={'modal-container'}
      style={{ left: open ? 0 : '100vw', top: open ? 0 : '100vh' }}
      onClick={handleCLick}
    >
      <div className={'modal-content'} {...rest}>
        {props.children}
        <span className={'close-icon'} onClick={onClose}>
          X
        </span>
      </div>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div<HTMLAttributes<Element>>`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;

  .modal-content {
    background: white;
    padding: 1rem;
    width: fit-content;
    border-radius: 8px;
    margin: 5rem auto;
    position: relative;
    height: fit-content;
  }
  .close-icon {
    position: absolute;
    top: 0.3rem;
    right: 0.5rem;
    font-size: 20px;
    color: gray !important;
    font-weight: 600;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;
