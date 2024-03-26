import { useState } from "react";
import LikeIcon from "./like_icon.svg";
import CommentIcon from "./cmt_icon.svg";
import SendIcon from "./send_icon.svg";
import SaveIcon from "./save_icon.svg";
import Image from "next/image";
import { Input } from "../common/Input";

export const ChildItem: React.FC<any> = ({ data }) => {
  const [] = useState<boolean>(false);

  return (
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
                  <a>강서현</a>
                  <span>님</span>
                  <span>Count</span>
                  <span>이 좋아합니다</span>
                </span>
              </div>
            </div>
          </section>{" "}
          {/** For the likes */}
          <div className="flex flex-row mt-2">
            <div className="">강서현</div>
            <div>내용내용내용내용내용</div>
            <div>더보기</div>
          </div>{" "}
          {/** For the content description */}
          <div>
            <a>
              댓글
              <span> n</span>개 모두 보기
            </a>
          </div>{" "}
          {/** For showing other comments */}
          <Input
            style="secondary"
            placeholder="댓글 달기..."
            value=""
            onChange={() => {}}
          />
          {/** For writing new comment */}
        </div>
      </div>
    </div>
  );
};
