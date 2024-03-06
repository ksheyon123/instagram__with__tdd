import { MouseEventHandler, useState } from "react";
import { Accordion } from "./Accordion";
import { Replies } from "./Replies";
import { MoreButton } from "./MoreButton";
import { Button } from "./Button";

type CommentType = {
  title: string | number;
  data?: CommentType[];
};

export const Comments: React.FC = () => {
  const [items, setItems] = useState<CommentType[]>([
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

  const onClickComment = async () => {};
  return (
    <Accordion
      items={items}
      onClick={onClick}
      mainComponent={(d) => <Comment {...d} onClick={onClickComment} />}
      childComponent={(d) => {
        const { data } = d;
        return <Replies items={data} />;
      }}
    />
  );
};

interface ICommentProps extends CommentType {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Comment: React.FC<ICommentProps> = ({ title }) => {
  const buttons = [
    <Button name="" onClick={() => {}} />,
    <Button name="" onClick={() => {}} />,
  ];

  return (
    <div>
      {title}
      <MoreButton buttons={buttons} />
    </div>
  );
};
