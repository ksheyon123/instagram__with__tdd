import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("List Component", () => {
  it("which render a number of items", () => {
    const ITEMS = ["1", "2"];
    const { container } = render(
      <>
        {ITEMS.map((el) => (
          <div>{el}</div>
        ))}
      </>
    );
    expect(container.children).toHaveLength(2);
  });

  it("is clicked by user", () => {
    const CHILD_TEXT = "HI";
    const CHILD_COMPONENT = <div>{CHILD_TEXT}</div>;
    const { getByText } = render(<></>);
    const component = getByText(CHILD_TEXT);
    expect(component).toHaveLength(2);
  });
});
