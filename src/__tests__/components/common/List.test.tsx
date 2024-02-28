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

  it("which is clicked the hidden child component is opened.", () => {
    const CHILD_TEXT = "HI";
    const CHILD_COMPONENT = <div>{CHILD_TEXT}</div>;
    const { getByText } = render(<></>);
    const component = getByText(CHILD_TEXT);
    expect(component).toHaveLength(2);
  });

  it("with description", () => {});

  it("if the user click the item of list twice, it will be closed", () => {});
});

describe("List component with the remove button", () => {
  it("if the user click the btn, item will be removed.", () => {});
});

describe("List component with the chk button", () => {
  it("if the user click the btn, item will be high-lighted.", () => {});
});
