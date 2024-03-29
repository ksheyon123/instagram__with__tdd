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
  footer?: ReactNode;
}

export const ModalWrapper: React.FC<IModalProps> = ({
  isOpen,
  onOpenChange,
  header,
  body,
  footer,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>{!!header && header}</ModalHeader>
        <ModalBody>{!!body && body}</ModalBody>
        <ModalFooter>{!!footer && footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
