import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "@/components/common/Accordion";
import { AccordionItem } from "@/types/types";

const NAME1 = "1";
const DESCRIPTION1 = "DESCRIPTION1";
const NAME2 = "2";
const DESCRIPTION2 = "DESCRIPTION2";
let items: AccordionItem[] = [
  { name: NAME1, description: DESCRIPTION1 },
  { name: NAME2, description: DESCRIPTION2 },
];
const onClick = jest.fn((d) => {
  const idx = items.findIndex((e) => e.name === d.name);
  items[idx].active = true;
});

describe("Accordion Component", () => {
  it("which render a number of items", () => {
    const { getAllByRole } = render(<Accordion items={items} />);
    const component = getAllByRole("listitem");
    expect(component).toHaveLength(2);
  });

  it("which is clicked the hidden child component is opened.", () => {
    const c = render(<Accordion items={items} onClick={onClick} />);
    const { getByText } = c;
    const component = getByText(NAME1);
    fireEvent.click(component);
    c.rerender(<Accordion items={items} onClick={onClick} />);
    const description1 = getByText(DESCRIPTION1);
    expect(description1).toBeInTheDocument();
  });

  it("if the user click the same item twice, it will be closed", () => {
    const c = render(<Accordion items={items} onClick={onClick} />);
    const { getAllByRole, getByText } = c;
    const component = getAllByRole("listitem")[0];
    const hiddenComponent = getByText(DESCRIPTION1);
    expect(hiddenComponent).not.toBeInTheDocument();
    fireEvent.click(component);
    c.rerender(<Accordion items={items} onClick={onClick} />);
    expect(hiddenComponent).toBeInTheDocument();
    fireEvent.click(component);
    c.rerender(<Accordion items={items} onClick={onClick} />);
    expect(hiddenComponent).not.toBeInTheDocument();
  });
});

describe("Accordion component with the remove button", () => {
  const items = [{ name: "1" }];

  it("if the user click the btn, item will be removed.", () => {
    // const REMOVED_TXT = "removed txt";
    const REMOVE_BTN_NAME = "Remove";
    const { getByRole, getByText } = render(<Accordion items={items} />);
    const rmBtn = getByText(REMOVE_BTN_NAME);
    const listItem = getByRole("listitem");
    fireEvent.click(rmBtn);
    expect(listItem).not.toBeInTheDocument();
  });
});

describe("Accordion component with the chk button", () => {
  const items = [{ name: "1" }];

  it("if the user click the btn, item will be high-lighted.", () => {
    const ITEM_NAME = "will be highlighted";
    const { getByText } = render(<Accordion items={items} />);
    const listItem = getByText(ITEM_NAME);
    expect(listItem.classList.contains("active")).toBe(true);
  });
});
