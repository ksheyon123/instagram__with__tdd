import { ListItem } from "@/types/types";
import { ReactElement } from "react";

interface IListProps {
  items: ListItem[];
  onClick?: (e: ListItem) => void;
  child?: any;
}

export const List: React.FC<IListProps> = ({ items, onClick, child }) => {
  return (
    <div>
      {items.map(({ name, description }, idx) => (
        <div>
          <div>{name}</div>
          {description && <div>{description}</div>}
          {child && child}
        </div>
      ))}
    </div>
  );
};
