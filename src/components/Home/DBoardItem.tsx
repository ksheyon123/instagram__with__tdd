import Image from "next/image";

import { useState } from "react";

import { InstagramContent } from "@/types/types";

import LikeIcon from "@/assets/icons/like_icon.svg";
import CommentIcon from "@/assets/icons/cmt_icon.svg";
import SendIcon from "@/assets/icons/send_icon.svg";
import SaveIcon from "@/assets/icons/save_icon.svg";
import MoreIcon from "@/assets/icons/more_icon.svg";

import { MoreButton } from "@/components/Common/MoreButton";
import { Button } from "@/components/Common/Button";
interface IProps extends InstagramContent {
  userData?: any;
  onClick?: any;
}
type PickMedia = Pick<InstagramContent, "media_url" | "media_type">;
type PickLikeCount = Pick<InstagramContent, "like_count">;
type PickUserD = Pick<IProps, "userData" | "caption">;
type OnlyUser = Omit<PickUserD, "caption">;
type PickComments = Pick<IProps, "onClick" | "replies" | "comments_count">;

export const DBoardItem: React.FC<IProps> = (props) => {
  const {
    media_type,
    media_url,
    userData,
    like_count,
    comments_count,
    caption,
    id,
    onClick,
    replies,
  } = props;
  return (
    <article className="dashboard-item block" key={id}>
      <div className="flex flex-col w-full min-w-[370px] h-full pb-4 mb-5 border-b border-gray219">
        <ItemHead userData={userData} />
        <ItemImage media_url={media_url} media_type={media_type} />
        <div className="block">
          <div className="relative flex flex-col h-full">
            <div>
              <ItemIcons />
              <LikesItem like_count={like_count} />
              <ShowMore userData={userData} caption={caption} />{" "}
              <Comments
                onClick={onClick}
                replies={replies}
                comments_count={comments_count}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ItemHead: React.FC<OnlyUser> = ({ userData }) => {
  const onClickRemove = () => {};
  const buttons = [
    <Button
      style={{ color: "red", fontSize: "12px" }}
      btnStyleType="fb0"
      name="삭제"
      onClick={onClickRemove}
    />,
  ];
  return (
    <div className="dashboard-item-head pl-1 pb-3">
      <div className="flex flex-row w-full items-center justify-start">
        <div className="mr-3">
          <div className="relative">
            <canvas className="absolute w-[42px] h-[42px] top-[-5px] left-[-5px]" />
            <a className="flex w-8 h-8 rounded-full border-[#000]/[0.0975] border-[1px]">
              <img className="object-cover" />
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start grow">
          {!!userData ? userData.username : "Unknown"}
        </div>
        <div className="flex flex-row">
          <MoreButton icon={<MoreIcon />} buttons={buttons} />
        </div>
      </div>
    </div>
  );
};

const ItemImage: React.FC<PickMedia> = ({ media_url, media_type }) => {
  const isVideo = media_type === "VIDEO";
  return (
    <div className="relative flex items-center flex-shrink-0 border border-gray219 bg-black rounded">
      <div className="box-border">
        <div className="relative w-[468px] max-h-[568px] overflow-hidden">
          {isVideo ? (
            <video
              className="block object-contain overflow-clip min-w-full min-h-full w-full h-full"
              src={media_url}
            />
          ) : (
            <Image width={470} height={470} src={media_url} alt="media_url" />
          )}
        </div>
      </div>
    </div>
  );
};

const ItemIcons: React.FC = () => {
  return (
    <div className="grid items-center grid-cols-2 my-1">
      <div className="flex ">
        <span className="ml-[-8px]">
          <div className="p-2">
            <LikeIcon />
          </div>
        </span>
        <span>
          <div className="p-2">
            <CommentIcon />
          </div>
        </span>
        <span>
          <div className="p-2">
            <SendIcon />
          </div>
        </span>
      </div>
      <div className="ml-auto mr-0">
        <span>
          <div className="p-2">
            <SaveIcon />
          </div>
        </span>
      </div>
    </div>
  );
};

const LikesItem: React.FC<PickLikeCount> = ({ like_count }) => {
  return (
    <section>
      <div className="flex flex-row items-center justify-start">
        {/* <div className="mr-1">
          <div className="rounded-[50%] border-[#000]/[0.4] border overflow-hidden">
            <div className="w-[14px] h-[14px] border-[2px] border-[#FFF]/[0.8]">
              <Image
                className="opacity-1"
                width={14}
                height={14}
                src={""}
                alt="profile"
              />
            </div>
          </div>
        </div> */}
        <div>
          <span>
            <span>좋아요</span>
            <span> {like_count}</span>
            <span>개</span>
          </span>
        </div>
      </div>
    </section>
  );
};

const ShowMore: React.FC<PickUserD> = ({ userData, caption }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="flex flex-row mt-2">
      <div
        className={`inline-block text-black font-900  ${
          showMore
            ? "max-w-[470px] text-wrap"
            : "w-[300px] overflow-hidden text-ellipsis whitespace-nowrap"
        }`}
      >
        <span>{!!userData ? userData.username : "Unknown"} </span>
        <span className="font-normal">
          {caption +
            "ajshdfkajsdhfkjahsdflkahs dflkahsdfkjhasdlkjfhasdlkjfhals kdjfhaslkjdfhajshdfkajsdhfkjah sdflkahsdflkahsdfkjhasdlkjfhasdlkjfhalskdjfhaslkjdfh"}
        </span>
      </div>
      {!showMore && (
        <div className="" onClick={() => setShowMore((prev) => !prev)}>
          더보기
        </div>
      )}
    </div>
  );
};

const Comments: React.FC<PickComments> = ({
  onClick,
  comments_count,
  replies,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => {
          if (!!onClick) onClick();
        }}
      >
        <a>
          댓글
          <span onClick={() => setIsShow((prev) => !prev)}>
            {" "}
            {comments_count}
          </span>
          개 모두 보기
        </a>
      </div>
      {isShow && (
        <div>
          <div></div>
        </div>
      )}
    </div>
  );
};
