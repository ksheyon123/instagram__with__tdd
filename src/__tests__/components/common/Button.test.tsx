import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "@/components/common/Button";

describe("Button Component", () => {
  it("which receives button name", () => {
    const BUTTON_NAME = "버튼 이름";
    const {} = render(<></>);
  });
});
