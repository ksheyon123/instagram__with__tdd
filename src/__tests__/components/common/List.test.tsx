import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("List Component", () => {
  it("which shows items", () => {
    const FIRST_ITEM_NAME = "first";
    const { getAllByText } = render(<></>);
    const component = getAllByText(FIRST_ITEM_NAME);
    expect(component).toBeInTheDocument();
  });
});
