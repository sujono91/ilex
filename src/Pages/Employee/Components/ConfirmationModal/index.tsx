import React, { FC } from 'react';
import ActionModal from '../Modal';
import { ModalBody, ModalFooter, Button } from 'reactstrap';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

const ConfirmationModal: FC<Props> = ({ children, isOpen, onCancel, onSubmit }) => {
  return (
    <ActionModal
      title="Confirmation"
      isOpen={isOpen}
    >
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onCancel}>
          No
        </Button>
        <Button color="danger" type="submit" onClick={onSubmit}>
          Yes
        </Button>
      </ModalFooter>
    </ActionModal>
  );
};

export default ConfirmationModal;
