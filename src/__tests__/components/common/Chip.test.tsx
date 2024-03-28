import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Chip } from "@/components/common/Chip";

describe("Chip component", () => {
  const CHIP_NAME = "chip_name";
  it("receives string and shows it for the UI", () => {
    const { getByText } = render(<Chip name={CHIP_NAME} />);
    const chip = getByText(CHIP_NAME);
    expect(chip).toBeInTheDocument();
  });

  // NextUI 로 테스트 할 방법 없음
  // it("is now disabled", () => {
  //   const { getByText } = render(<Chip isDisabled={true} name={CHIP_NAME} />);
  //   const chip = getByText(CHIP_NAME);
  //   expect(chip).not.toBeInTheDocument();
  // });
});
