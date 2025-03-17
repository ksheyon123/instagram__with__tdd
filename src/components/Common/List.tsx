import { Fragment, ReactNode } from "react";

interface IProps {
  items: any[];
  child: (d) => ReactNode | ReactNode[];
  prefix?: string;
}

export const List: React.FC<IProps> = ({ items, child, prefix = "" }) => {
  return (
    <div role="listbox">
      {items.map((el, idx) => (
        <Fragment key={idx}>{child(el)}</Fragment>
      ))}
    </div>
  );
};
