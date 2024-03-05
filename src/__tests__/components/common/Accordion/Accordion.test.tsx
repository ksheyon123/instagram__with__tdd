import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "@/components/common/Accordion/Accordion";
import { AccordionItem } from "@/types/types";

const NAME1 = "1";
const DESCRIPTION1 = "DESCRIPTION1";
const NAME2 = "2";
const DESCRIPTION2 = "DESCRIPTION2";
let items: AccordionItem[] = [];

beforeEach(() => {
  items = [
    { name: NAME1, description: DESCRIPTION1 },
    { name: NAME2, description: DESCRIPTION2 },
  ];
});

const onClick = (d) => {
  const idx = items.findIndex((e) => e.name === d.name);
  if (idx >= 0) {
    items[idx].active = !items[idx]?.active;
  }
};

// Test Cases : items 수 확인, child component 렌더 확인, 열고 닫힘 확인, 아이템 삭제 확인

describe("Accordion Component", () => {
  it("which render a number of items", () => {
    const { getAllByRole } = render(<Accordion items={items} />);
    const component = getAllByRole("listitem");
    expect(component).toHaveLength(2);
  });

  it("which receives child component", () => {
    const CHILD_COMPONENT = <div>{DESCRIPTION1}</div>;
    const newItems = [{ name: NAME1, active: true, data: {} }];
    const component = render(
      <Accordion
        items={newItems}
        onClick={onClick}
        child={(d) => CHILD_COMPONENT}
      />
    );
    expect(component.getByText(DESCRIPTION1)).toBeInTheDocument();
  });

  it("which is clicked the hidden child component is opened.", async () => {
    const component = render(<Accordion items={items} onClick={onClick} />);
    const item = component.getAllByRole("listitem")[0];
    fireEvent.click(item);

    component.rerender(<Accordion items={items} onClick={onClick} />);
    expect(item).toHaveClass("active");
    const description1 = component.getByText(DESCRIPTION1);
    expect(description1).toBeInTheDocument();
  });

  it("if the user click the same item twice, it will be closed", () => {
    const { rerender, getAllByRole, getByText } = render(
      <Accordion items={items} onClick={onClick} />
    );
    const item = getAllByRole("listitem")[0];
    expect(item).not.toHaveTextContent(DESCRIPTION1);

    fireEvent.click(item);

    rerender(<Accordion items={items} onClick={onClick} />);
    expect(item).toHaveTextContent(DESCRIPTION1);

    fireEvent.click(item);

    rerender(<Accordion items={items} onClick={onClick} />);
    expect(item).not.toHaveTextContent(DESCRIPTION1);
  });
});

describe("Accordion component with the remove button", () => {
  let items = [{ name: "1" }];
  const onRemove = () => {
    items.shift();
  };

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
