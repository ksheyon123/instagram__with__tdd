import { MouseEventHandler, useState } from "react";
import { Accordion } from "./Accordion";
import { Replies } from "./Replies";
import { MoreButton } from "./MoreButton";
import { Button } from "./Button";

type CommentType = {
  title: string | number;
  active?: boolean;
  like?: boolean;
  data?: CommentType[];
};

const comments = [
  { title: "Comment1", data: [{ title: "Reply1" }] },
  { title: "Comment2", data: [{ title: "Reply2" }] },
];

const Comments: React.FC = () => {
  const [items, setItems] = useState<CommentType[]>(comments);

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

  const fetchLike = async (d) => {
    setItems((prev: any[]) => {
      const idx = prev.findIndex((el) => el.title === d);
      const newArr = prev
        .slice(0, idx)
        .concat({
          ...prev[idx],
          like: !prev[idx]?.like,
        })
        .concat(prev.slice(idx + 1));
      return newArr;
    });
  };
  const fetchRemove = async (d) => {
    setItems((prev: any[]) => {
      const idx = prev.findIndex((el) => el.title === d);
      const newArr = prev.slice(0, idx).concat(prev.slice(idx + 1));
      return newArr;
    });
  };
  return (
    <Accordion
      items={items}
      onClick={onClick}
      mainComponent={(d) => (
        <Comment {...d} onClickLike={fetchLike} onClickRemove={fetchRemove} />
      )}
      childComponent={(d) => {
        const { data } = d;
        return <Replies items={data} />;
      }}
    />
  );
};

interface ICommentProps extends CommentType {
  onClickLike: (data) => void;
  onClickRemove: (data) => void;
}

const Comment: React.FC<ICommentProps> = ({
  title,
  like,
  onClickLike,
  onClickRemove,
}) => {
  const buttons = [
    <Button name="Like" onClick={() => onClickLike(title)} />,
    <Button name="Remove" onClick={() => onClickRemove(title)} />,
  ];

  return (
    <div className={`comment-container ${like ? "like" : ""}`}>
      <div>{title}</div>
      <MoreButton buttons={buttons} />
    </div>
  );
};

export { Comments, Comment };
