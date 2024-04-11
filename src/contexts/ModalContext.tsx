// import { getAccessToken } from "@/apis/api";
import { ModalWrapper } from "@/components/Modal/DefaultModal";
import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: ChildrenProps) => {
  const [buttons, setButtons] = useState<ReactNode>(<></>);
  const [body, setBody] = useState<ReactNode>(<></>);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * @description body와 footer를 전달하고 모달을 open합니다.
   * @returns
   */
  const handleModal = (props: any) => {};
  return (
    <ModalContext.Provider
      value={{
        handleModal,
      }}
    >
      {children}
      <ModalWrapper
        isOpen={isOpen}
        onOpenChange={(e) => handleModal(e)}
        body={body}
        buttons={buttons}
      />
    </ModalContext.Provider>
  );
};
