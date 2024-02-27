import { ReactElement, ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode | ReactNode[];
};

export type ListItem = {
  name: string;
  description?: string;
  ChildComponent?: ReactElement;
};
