import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "@/components/common/List";

describe("List Component", () => {
  const NAME1 = "1";
  const NAME2 = "2";
  const items = [{ name: NAME1 }, { name: NAME2 }];
  it("which render a number of items", () => {
    const { getAllByRole } = render(<List items={items} />);
    const component = getAllByRole("listitem");
    expect(component).toHaveLength(2);
  });

  it("which is clicked the hidden child component is opened.", () => {
    const CHILD_TEXT = "HI";
    const CHILD_COMPONENT = <div>{CHILD_TEXT}</div>;
    const { getByText } = render(<List items={items} />);
    const component = getByText(CHILD_TEXT);
    expect(component).toHaveLength(2);
  });

  it("with description", () => {
    const DESCRIPTION = "Hi";
    const { getByText } = render(<List items={items} />);
    const component = getByText(DESCRIPTION);
    expect(component).toBeInTheDocument();
  });

  it("if the user click the same item twice, it will be closed", () => {
    const DESCRIPTION = "Hi";
    const { getAllByRole, getByText } = render(<List items={items} />);
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
  const items = [{ name: "1" }];

  it("if the user click the btn, item will be removed.", () => {
    // const REMOVED_TXT = "removed txt";
    const REMOVE_BTN_NAME = "Remove";
    const { getByRole, getByText } = render(<List items={items} />);
    const rmBtn = getByText(REMOVE_BTN_NAME);
    const listItem = getByRole("listitem");
    fireEvent.click(rmBtn);
    expect(listItem).not.toBeInTheDocument();
  });
});

describe("List component with the chk button", () => {
  const items = [{ name: "1" }];

  it("if the user click the btn, item will be high-lighted.", () => {
    const ITEM_NAME = "will be highlighted";
    const { getByText } = render(<List items={items} />);
    const listItem = getByText(ITEM_NAME);
    expect(listItem.classList.contains("active")).toBe(true);
  });
});
