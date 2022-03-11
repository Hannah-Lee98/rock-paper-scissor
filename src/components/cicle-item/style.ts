import styled from 'styled-components';

interface ICircleItemWrapper {
  color: string;
  colorShadow: string;
}

export const CircleItemWrapper = styled.div<ICircleItemWrapper>`
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(${p => p.color});
  display: flex;
  justify-items: center;
  align-items: center;
  border-bottom: 5px solid ${p => p.colorShadow};
  :hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
  .inner-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: white;
    border-top: 5px solid hsl(0, 0%, 88%);
  }
  .inner-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
