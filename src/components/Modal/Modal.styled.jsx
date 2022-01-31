import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;
