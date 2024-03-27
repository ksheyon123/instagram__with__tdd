import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "@/components/common/List";

describe("List component", () => {
  const NUMBER_OF_CHILDREN = 1;
  const CHILD_NAME = "child";
  const items = [{ name: CHILD_NAME }];
  it("shows list", () => {
    const { container } = render(
      <List items={items} child={(d) => <>{d.name}</>} />
    );
    const leng = container.childNodes[0].childNodes;
    expect(leng).toHaveLength(NUMBER_OF_CHILDREN);
  });

  it("receives child component", () => {
    const { getByText } = render(
      <List items={items} child={(d) => <>{d.name}</>} />
    );
    const child = getByText(CHILD_NAME);
    expect(child).toBeInTheDocument();
  });
});
