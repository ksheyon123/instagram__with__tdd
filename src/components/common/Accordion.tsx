import { AccordionItem } from "@/types/types";
import { ReactNode, useState } from "react";

interface IListProps {
  items: any[];
  onClick?: (e: any) => void;
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
    <div className="flex flex-col w-full h-full">
      {items.map((item, idx) => {
        const { active } = item;
        return (
          <article
            className={active && "active" + " block"}
            role="listitem"
            onClick={() => onClick(item)}
          >
            <div className="flex flex-col w-full h-full min-w-[390px] pb-4 mb-5 border-b">
              <div className="pb-3 pl-[4px]"></div>
              {!!mainComponent && mainComponent(item)}
              {!!childComponent && childComponent(item)}
              {/* {active && !!childComponent && childComponent(item)} */}
            </div>
          </article>
        );
      })}
    </div>
  );
};
