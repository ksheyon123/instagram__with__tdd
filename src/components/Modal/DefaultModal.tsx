import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

interface IModalProps {
  isOpen: boolean;
  onOpenChange: (e: boolean) => void;
  header?: ReactNode;
  body?: ReactNode;
  buttons?: ReactNode | ReactNode[];
}

export const ModalWrapper: React.FC<IModalProps> = ({
  isOpen,
  onOpenChange,
  header,
  body,
  buttons,
}) => {
  const isArray = Array.isArray(buttons);
  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>{!!header && header}</ModalHeader>
        <ModalBody>{!!body && body}</ModalBody>
        <ModalFooter>{!!buttons && buttons}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
