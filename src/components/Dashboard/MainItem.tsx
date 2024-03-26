import { InstagramContent } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

interface IProps extends InstagramContent {}

export const MainItem: React.FC<IProps> = ({
  media_url,
  id,
}: InstagramContent) => {
  const [isVideo, setIsVideo] = useState<boolean>(false);
  console.log(media_url);
  return (
    <div className="border rounded">
      <div className="w-[470px] h-full">
        {isVideo ? (
          <video src={media_url} />
        ) : (
          <Image
            className="object-contain"
            width={470}
            height={100}
            src={media_url}
            alt="main_img"
            onError={() => {
              setIsVideo(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
