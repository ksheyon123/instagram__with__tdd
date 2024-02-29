import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("List Component", () => {
  it("which render a number of items", () => {
    const { getByRole } = render(<></>);
    const component = getByRole("listitem");
    expect(component).toHaveLength(2);
  });

  it("which is clicked the hidden child component is opened.", () => {
    const CHILD_TEXT = "HI";
    const CHILD_COMPONENT = <div>{CHILD_TEXT}</div>;
    const { getByText } = render(<></>);
    const component = getByText(CHILD_TEXT);
    expect(component).toHaveLength(2);
  });

  it("with description", () => {
    const DESCRIPTION = "Hi";
    const { getByText } = render(<></>);
    const component = getByText(DESCRIPTION);
    expect(component).toBeInTheDocument();
  });

  it("if the user click the same item twice, it will be closed", () => {
    const DESCRIPTION = "Hi";
    const { getAllByRole, getByText } = render(<></>);
    const component = getAllByRole("listitem")[0];
    const hiddenComponent = getByText(DESCRIPTION);
    expect(hiddenComponent).not.toBeInTheDocument();
    fireEvent.click(component);
    expect(hiddenComponent).toBeInTheDocument();
    fireEvent.click(component);
    expect(hiddenComponent).not.toBeInTheDocument();
  });
});

describe("List component with the remove button", () => {
  it("if the user click the btn, item will be removed.", () => {
    const { getByRole } = render(<></>);
    const listItem = getByRole("listitem");
  });
});

describe("List component with the chk button", () => {
  it("if the user click the btn, item will be high-lighted.", () => {});
});
