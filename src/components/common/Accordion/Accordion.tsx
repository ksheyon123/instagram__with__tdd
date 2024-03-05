import { AccordionItem } from "@/types/types";
import { ReactNode, useState } from "react";

interface IListProps {
  items: AccordionItem[];
  onClick?: (e: AccordionItem) => void;
  mainComponent?: (d: any) => ReactNode | ReactNode[];
  childComponent?: (d: any) => ReactNode | ReactNode[];
}

export const Accordion: React.FC<IListProps> = ({
  items,
  onClick,
  mainComponent,
  childComponent,
}) => {
  return (
    <div>
      {items.map((item, idx) => {
        const { active } = item;
        return (
          <div
            className={active && "active"}
            role="listitem"
            onClick={() => onClick(item)}
          >
            <div>{!!mainComponent && mainComponent(item)}</div>
            {active && !!childComponent && childComponent(item)}
          </div>
        );
      })}
    </div>
  );
};
