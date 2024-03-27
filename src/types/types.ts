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

export type InstagramContent = {
  id: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO";
  caption: string;
  comments_count: number;
  like_count: number;
  replies: Reply[];
};

export type Reply = {
  id: string;
  text: string;
  timestamp: string;
};
