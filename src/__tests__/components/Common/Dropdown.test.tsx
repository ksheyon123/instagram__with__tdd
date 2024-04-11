import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Dropdown component", () => {
  const DROPDOWN_NAME = "DROPDOWN";
  it("is on the DOM", () => {
    const { getByText } = render(<></>);
    const component = getByText(DROPDOWN_NAME);

    expect(component).toBeInTheDocument();
  });

  it("it shows inner content", () => {
    const INNER_CONTENT = "DROPDOWN_ITEM";
    const { getByText } = render(<></>);
    const component = getByText(DROPDOWN_NAME);
  });
});
