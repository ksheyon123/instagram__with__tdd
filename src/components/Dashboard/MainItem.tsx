import { InstagramContent } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

interface IProps extends InstagramContent {}

export const MainItem: React.FC<IProps> = ({
  media_url,
  media_type,
  id,
}: InstagramContent) => {
  const isVideo = media_type === "VIDEO";
  return (
    <div className="border rounded overflow-hidden">
      <div className="w-[470px] max-h-[585px] bg-black">
        {isVideo ? (
          <video className="object-contain" src={media_url} autoPlay />
        ) : (
          <Image
            className="block object-contain w-full h-full"
            width={470}
            height={100}
            src={media_url}
            alt="main_img"
          />
        )}
      </div>
    </div>
  );
};
