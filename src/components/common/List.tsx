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
      {items.map((item, idx) => {
        const { name, description, data, active } = item;
        return (
          <div role="listitem" onClick={() => onClick(item)}>
            <div>{name}</div>
            {active && description && <div>{description}</div>}
            {active && !!child && child(data)}
          </div>
        );
      })}
    </div>
  );
};
