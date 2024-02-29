import { ListItem } from "@/types/types";
import { ReactElement, ReactNode } from "react";

interface IListProps {
  items: ListItem[];
  onClick?: (e: ListItem) => void;
  child?: (d: any) => ReactNode | ReactNode[];
}

export const List: React.FC<IListProps> = ({ items, onClick, child }) => {
  return (
    <div>
      {items.map(({ name, description, data }, idx) => (
        <div role="listitem">
          <div>{name}</div>
          {description && <div>{description}</div>}
          {child && child(data)}
        </div>
      ))}
    </div>
  );
};
