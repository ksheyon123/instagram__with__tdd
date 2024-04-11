import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

interface IModalProps {
  //   isOpen: boolean;
  //   onOpenChange: (e: boolean) => void;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  dangerouslySetInnerHTML?: any;
}

export const AuthModal: React.FC<IModalProps> = ({
  //   isOpen,
  //   onOpenChange,
  header,
  body,
  footer,
  dangerouslySetInnerHTML,
}) => {
  return (
    <iframe
      width="200px"
      height="200px"
      scrolling="no"
      src={"/auth"}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
  );
};
