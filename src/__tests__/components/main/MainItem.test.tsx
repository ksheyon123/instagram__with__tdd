import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MainItem", () => {
  const IMG_ALT_TXT = "main_img";
  const IMG_URL = "the_url";
  const UPLOADER_NAME = "kshyeon123";
  const DESCRIPTION = "Hi";
  const NUMBER_OF_LIKES = 0;
  it("displays uploader, image, description, likes etc", () => {
    const { getByAltText, getByText } = render(<></>);
    const img = getByAltText(IMG_ALT_TXT);
    const uploader = getByText(UPLOADER_NAME);
    const description = getByText(DESCRIPTION);
    const likes = getByText(NUMBER_OF_LIKES);

    // Has URL
    expect(img).toHaveAttribute("src", IMG_URL);
    expect(uploader).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(likes).toEqual(NUMBER_OF_LIKES);
  });
  it("shows playing and volume function conditionally", () => {
    const {} = render(<></>);
  });
  it("is de-activated when the user click itself", () => {
    const {} = render(<></>);
  });
  it("shows volume btn", () => {
    const {} = render(<></>);
  });
});
