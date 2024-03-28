import { ReactNode } from "react";

interface IProps {
  items: any[];
  child: (d) => ReactNode | ReactNode[];
  prefix?: string;
}

export const List: React.FC<IProps> = ({ items, child, prefix = "" }) => {
  return (
    <div>
      {items.map((el, idx) => (
        <article className="block" key={prefix + idx}>
          {child(el)}
        </article>
      ))}
    </div>
  );
};
