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

export type UserData = {
  id: string; //ID of the Instagram user
  follow_count: number; //Number of Instagram users that this Instagram user follows
  followed_by_count: number; //Number of Instagram users that follow this Instagram user
  has_profile_picture: boolean; //Indicates whether Instagram Account has a profile picture
  is_private: boolean; //Whether the Instagram user is private
  is_published: boolean; //Whether the Instagram user is published
  media_count: number; //Number of active media posted by this Instagram user
  profile_pic: string; //URI to user's Instagram profile picture
  username: string;
};

export type Reply = {
  id: string;
  text: string;
  timestamp: string;
};

export type ToggleModalItem = {
  title: string;
  icon: any;
  url: string;
};
