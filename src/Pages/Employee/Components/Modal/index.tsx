import React, { FC } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

interface Props {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
}

const ActionModal: FC<Props> = ({ isOpen, title, children }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div data-testid="actionModal">
          {title}
        </div>
      </ModalHeader>
      {children}
    </Modal>
  );
};

export default ActionModal;
