import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  images: any;
  width: number;
  height: number;
}

export const ImageSlider: React.FC<IProps> = ({ images, width, height }) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (images.length > 0) {
      const intervalId = setInterval(() => {
        setCount((prev) => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(intervalId);
    }
  }, [images]);

  return (
    <Image
      className={"image-slider-" + count}
      src={images[count]}
      width={width}
      height={height}
      alt={"image-slider-" + count}
    />
  );
};
