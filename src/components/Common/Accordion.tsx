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
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div>
      <article
        data-testid="accordion"
        onClick={() => setIsShow((prev) => !prev)}
      >
        <div>{!!mainComponent && mainComponent}</div>
        {!!childComponent && isShow && childComponent}
      </article>
    </div>
  );
};
