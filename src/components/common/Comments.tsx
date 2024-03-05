import { useState } from "react";
import { Accordion } from "./Accordion";
import { Replies } from "./Replies";

export const Comments: React.FC = () => {
  const [items, setItems] = useState<any[]>([
    { title: "Comment1", data: [{ title: "Reply1" }] },
    { title: "Comment2", data: [{ title: "Reply2" }] },
  ]);
  const onClick = (d) => {
    setItems((prev: any[]) => {
      const idx = prev.findIndex((el) => el.title === d.title);
      const newArr = prev
        .slice(0, idx)
        .concat({
          ...prev[idx],
          active: !prev[idx]?.active,
        })
        .concat(prev.slice(idx + 1));
      return newArr;
    });
  };
  return (
    <Accordion
      items={items}
      onClick={onClick}
      mainComponent={(d) => <div>{d.title}</div>}
      childComponent={(d) => {
        const { data } = d;
        return <Replies items={data} />;
      }}
    />
  );
};
