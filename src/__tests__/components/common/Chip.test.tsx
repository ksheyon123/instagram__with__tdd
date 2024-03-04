import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Chip component", () => {
  const FIRST_ITEM = "1";
  const SECOND_ITEM = "2";
  const CHIP_ITEMS = [FIRST_ITEM, SECOND_ITEM];
  it("receives string[] and shows it for the UI", () => {
    const { getAllByRole } = render(<></>);
    const chips = getAllByRole("listitem");
    expect(chips).toHaveLength(2);
  });

  it("When the user click the one of chip, it will disappear", async () => {
    const { getByText } = render(<></>);
    const chip = getByText(FIRST_ITEM);
    await fireEvent.click(chip);
    expect(chip).not.toBeInTheDocument();
  });
});
