import React, { Children, ReactNode, useRef, useState } from 'react';
import { CloseIcon } from '../../assets/svg';
import { SubTitle, Title } from '../../styles/typogaphy';
import { ModalBox, ModalCloseButton, ModalContainer, ModalHeader, ModalOverlay } from './Modal.styles';

interface ModalProps {
  title?: string
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}

export const Modal: React.FC<ModalProps> = (props) => {
  const modalOverlayRef = useRef(null);
  const {isOpen, onClose, title, children } = props;

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(e.target === modalOverlayRef.current) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && 
        <ModalContainer>
          <ModalOverlay ref={modalOverlayRef} onClick={(e)=> handleOverlayClick(e)}/>
          <ModalBox>
            <ModalHeader>
              <ModalCloseButton onClick={()=> onClose()}>
                <CloseIcon/>
              </ModalCloseButton>
              <SubTitle fontWeight='bold'>{title}</SubTitle>
            </ModalHeader>
            {children}
          </ModalBox>
        </ModalContainer>
      }
    </>
  );
};