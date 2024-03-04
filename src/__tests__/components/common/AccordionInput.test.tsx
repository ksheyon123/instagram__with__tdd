import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Accordion Input Component", () => {
  it("has input and button component", () => {
    const { getByRole } = render(<></>);
    const input = getByRole("textbox");
    const button = getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
