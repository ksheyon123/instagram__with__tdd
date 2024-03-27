import { AccordionItem } from "@/types/types";
import { ReactNode, useState } from "react";

interface IListProps {
  mainComponent?: ReactNode | ReactNode[];
  childComponent?: ReactNode | ReactNode[];
}

export const Accordion: React.FC<IListProps> = ({
  mainComponent,
  childComponent,
}) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <div>
      <article onClick={() => setIsShow((prev) => !prev)}>
        <div>{!!mainComponent && mainComponent}</div>
        {!!childComponent && isShow && childComponent}
      </article>
    </div>
  );
};
