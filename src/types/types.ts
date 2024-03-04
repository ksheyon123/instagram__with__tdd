import { ReactElement, ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode | ReactNode[];
};

export type AccordionItem = {
  name: string;
  description?: string;
  data?: any | any[];
  ChildComponent?: ReactElement;
  active?: boolean;
};
