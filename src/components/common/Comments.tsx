import { MouseEventHandler, useState } from "react";
import { Accordion } from "./Accordion";
import { Replies } from "./Replies";
import { MoreButton } from "./MoreButton";
import { Button } from "./Button";
import { List } from "./List";

interface IProps {
  replies: Comment[];
}

type Comment = {
  id: string;
  text: string;
  timestamp: string;
  active?: boolean;
};

const Comments: React.FC<IProps> = ({ replies }) => {
  const [items, setItems] = useState<Comment[]>(replies);
  const onClick = (d) => {
    setItems((prev: Comment[]) => {
      const idx = prev.findIndex((el) => el.id === d.id);
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
    <List
      items={items}
      child={(d: Comment) => {
        const { text } = d;
        return (
          <Accordion
            mainComponent={
              <Comment
                text={text}
                onClickLike={fetchLike}
                onClickRemove={fetchRemove}
              />
            }
            childComponent={<></>}
          />
        );
      }}
    />
  );
};

interface ICommentProps extends Comment {
  onClickLike: (data) => void;
  onClickRemove: (data) => void;
}

const Comment: React.FC<any> = ({
  id,
  timestamp,
  text,
  onClickLike,
  onClickRemove,
}) => {
  const buttons = [
    <Button name="Like" onClick={() => onClickLike(id)} />,
    <Button name="Remove" onClick={() => onClickRemove(id)} />,
  ];

  return (
    // <div className={`comment-container ${like ? "like" : ""}`}>
    <>
      <div>{text}</div>
      <MoreButton buttons={buttons} />
    </>

    // </div>
  );
};

export { Comments, Comment };
