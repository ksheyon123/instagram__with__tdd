// import { getAccessToken } from "@/apis/api";
import { ModalWrapper } from "@/components/modal/DefaultModal";
import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: ChildrenProps) => {
  const [buttons, setButtons] = useState<ReactNode>(<></>);
  const [body, setBody] = useState<ReactNode>(<></>);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = (e: any) => {};
  return (
    <ModalContext.Provider value={{}}>
      {children}
      <>
        <ModalWrapper
          isOpen={isOpen}
          onOpenChange={(e) => handleModal(e)}
          body={body}
          footer={buttons}
        />
      </>
    </ModalContext.Provider>
  );
};
