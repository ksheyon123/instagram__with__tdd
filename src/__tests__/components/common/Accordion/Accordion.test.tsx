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

const mainComponent = (props) => <div>{props.name}</div>;
const childComponent = (props) => <div>{props.description}</div>;

describe("Accordion Component", () => {
  const accordion = (props?: any) => <Accordion items={items} {...props} />;
  it("which show accordion title", () => {
    const { getByText } = render(
      accordion({
        mainComponent: (d) => mainComponent({ name: d.name }),
      })
    );
    const title = getByText(NAME1);
    expect(title).toBeInTheDocument();
  });

  it("which render a number of items", () => {
    const { getAllByRole } = render(accordion());
    const component = getAllByRole("listitem");
    expect(component).toHaveLength(2);
  });

  it("which receives child component", () => {
    const newItems = [
      { name: NAME1, description: DESCRIPTION1, active: true, data: {} },
    ];
    const { getByText } = render(
      accordion({
        items: newItems,
        onClick: onClick,
        childComponent: (d) => childComponent(d),
      })
    );
    const description = getByText(DESCRIPTION1);
    expect(description).toBeInTheDocument();
  });

  it("which is clicked the hidden child component is opened.", async () => {
    const component = render(
      accordion({
        items,
        onClick: onClick,
        childComponent: (d) => childComponent(d),
      })
    );
    const item = component.getAllByRole("listitem")[0];
    fireEvent.click(item);

    component.rerender(
      accordion({
        items,
        onClick: onClick,
        childComponent: (d) => childComponent(d),
      })
    );
    expect(item).toHaveClass("active");
    const description1 = component.getByText(DESCRIPTION1);
    expect(description1).toBeInTheDocument();
  });

  it("if the user click the same item twice, it will be closed", () => {
    const { rerender, getAllByRole } = render(
      accordion({
        items,
        onClick: onClick,
        childComponent: (d) => childComponent(d),
      })
    );
    const item = getAllByRole("listitem")[0];
    expect(item).not.toHaveTextContent(DESCRIPTION1);

    fireEvent.click(item);

    rerender(
      accordion({
        items,
        onClick: onClick,
        childComponent: (d) => childComponent(d),
      })
    );
    expect(item).toHaveTextContent(DESCRIPTION1);

    fireEvent.click(item);

    rerender(
      accordion({
        items,
        onClick: onClick,
        childComponent: (d) => childComponent(d),
      })
    );
    expect(item).not.toHaveTextContent(DESCRIPTION1);
  });
});
