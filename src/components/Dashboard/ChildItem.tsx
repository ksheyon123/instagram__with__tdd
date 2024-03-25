import { useState } from "react";
import LikeIcon from "./like_icon.svg";
import CommentIcon from "./cmt_icon.svg";
import SendIcon from "./send_icon.svg";

export const ChildItem: React.FC<any> = ({ data }) => {
  const [] = useState<boolean>(false);

  return (
    <div className="block">
      <div className="relative flex flex-col h-full">
        <div>
          <div className="grid items-center grid-cols-2 my-1">
            <div className="flex ">
              <span>
                <span className="p-2">
                  <LikeIcon />
                </span>
              </span>
              <span>
                <span className="p-2">
                  <CommentIcon />
                </span>
              </span>
              <span>
                <span className="p-2">
                  <SendIcon />
                </span>
              </span>
            </div>
            <div className="ml-auto mr-0">a</div>
          </div>{" "}
          {/** For the buttons */}
          <section></section> {/** For the likes */}
          <div></div> {/** For the content description */}
          <div></div> {/** For showing other comments */}
          <div></div> {/** For writing new comment */}
        </div>
      </div>
    </div>
  );
};
