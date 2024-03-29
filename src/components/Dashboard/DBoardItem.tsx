import Image from "next/image";

import { useState } from "react";

import { InstagramContent } from "@/types/types";

import LikeIcon from "@/assets/icons/like_icon.svg";
import CommentIcon from "@/assets/icons/cmt_icon.svg";
import SendIcon from "@/assets/icons/send_icon.svg";
import SaveIcon from "@/assets/icons/save_icon.svg";
import MoreIcon from "@/assets/icons/more_icon.svg";
interface IProps extends InstagramContent {
  userData?: any;
  onClick?: any;
}

export const DBoardItem: React.FC<IProps> = ({
  media_type,
  media_url,
  userData,
  like_count,
  comments_count,
  caption,
  id,
  onClick,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const isVideo = media_type === "VIDEO";
  return (
    <article className="block">
      <div className="flex flex-col w-full min-w-[370px] h-full pb-4 mb-5 border-b border-gray219">
        <ItemHead />
        <div className="relative flex items-center flex-shrink-0 border border-gray219 bg-black rounded">
          <div className="box-border">
            <div className="relative w-[468px] max-h-[568px] overflow-hidden">
              {isVideo ? (
                <video
                  className="block object-contain overflow-clip min-w-full min-h-full w-full h-full"
                  src={media_url}
                />
              ) : (
                <Image
                  width={470}
                  height={470}
                  src={media_url}
                  alt="media_url"
                />
              )}
            </div>
          </div>
        </div>
        <div className="block">
          <div className="relative flex flex-col h-full">
            <div>
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
              {/** For the buttons */}
              <section>
                <div className="flex flex-row items-center justify-start">
                  <div className="mr-1">
                    <div className="rounded-[50%] border-[#000]/[0.4] border overflow-hidden">
                      <div className="w-[14px] h-[14px] border-[2px] border-[#FFF]/[0.8]">
                        <Image
                          className="opacity-1"
                          width={14}
                          height={14}
                          src={
                            "https://scontent.cdninstagram.com/v/t51.2885-19/362046961_962885924983654_6774661436184945400_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=hYNq9dLYf8wAX_zWOqG&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfCtF4WrDll4PirMPoVXMdVTwXFy5yJkK2jMgGtlBgoVtA&oe=6607A082&_nc_sid=10d13b"
                          }
                          alt="t"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span>
                      <span>좋아요</span>
                      <span> {like_count}</span>
                      <span>개</span>
                    </span>
                  </div>
                </div>
              </section>{" "}
              {/** For the likes */}
              <div className="flex flex-row mt-2">
                <div className="inline-block text-black font-900 text-ellipsis  w-[300px]  overflow-hidden whitespace-nowrap">
                  <span>{!!userData ? userData.username : "Unknown"} </span>
                  <span className="font-normal">
                    {caption +
                      "ajshdfkajsdhfkjahsdflkahsdflkahsdfkjhasdlkjfhasdlkjfhalskdjfhaslkjdfh"}
                  </span>
                </div>
                <div>더보기</div>
              </div>
              {/** For the content description */}
              <div
                onClick={() => {
                  if (!!onClick) onClick(id);
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
              </div>{" "}
              {/** For showing other comments */}
              {isShow && (
                <div>
                  <div></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ItemHead: React.FC = () => {
  return (
    <div className="pl-1 pb-3">
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
          asdasd
        </div>
        <div className="flex flex-row items-center justify-start">
          <MoreIcon />
        </div>
      </div>
    </div>
  );
};

const ItemImage: React.FC = () => {
  return <></>;
};
