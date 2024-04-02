import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ScreenShot0 from "public/assets/images/screenshot1_2x.png";
import ScreenShot1 from "public/assets/images/screenshot2_2x.png";
import ScreenShot2 from "public/assets/images/screenshot3_2x.png";
import ScreenShot3 from "public/assets/images/screenshot4_2x.png";
import { ImageSlider } from "@/components/common/ImageSlider";

describe("Image Slider", () => {
  const PREFIX = "image-slider-";
  const items = [ScreenShot0, ScreenShot1, ScreenShot2, ScreenShot3];
  it("render first to last", (done) => {
    const { container } = render(
      <ImageSlider images={items} width={10} height={10} />
    );

    const child = container.childNodes[0];
    expect(child).toHaveClass("image-slider-0");
    setTimeout(() => {
      expect(child).toHaveClass("image-slider-1");
      expect(child).not.toHaveClass("image-slider-0");
      done();
    }, 2100);

    setTimeout(() => {
      expect(child).toHaveClass("image-slider-2");
      expect(child).not.toHaveClass("image-slider-1");
      done();
    }, 4100);

    setTimeout(() => {
      expect(child).toHaveClass("image-slider-3");
      expect(child).not.toHaveClass("image-slider-2");
      done();
    }, 4100);

    setTimeout(() => {
      expect(child).toHaveClass("image-slider-0");
      expect(child).not.toHaveClass("image-slider-3");
      done();
    }, 6100);
  });
});
