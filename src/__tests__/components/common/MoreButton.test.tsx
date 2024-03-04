import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MoreButton } from "@/components/common/MoreButton";
import { Button } from "@/components/common/Button";

describe("More button component", () => {
  const MORE_BTN_NAME = "More";
  const BTN_NAME = "BTN";
  const BTN_NAME1 = "BTN";

  it("Component on the DOM", () => {
    const { container } = render(<></>);
    expect(container).toBeInTheDocument();
  });

  it("receives single child component", () => {
    const CHILD_COMPONENT = <Button name={BTN_NAME} onClick={() => {}} />;
    const { getByText, container } = render(
      <MoreButton buttons={CHILD_COMPONENT} />
    );
    const button = getByText(MORE_BTN_NAME);
    fireEvent.click(button);
    const childBtn = getByText(BTN_NAME);
    expect(childBtn).toBeInTheDocument();
  });

  it("click the More button", () => {
    const CHILD_COMPONENT = [
      <Button name={BTN_NAME} onClick={() => {}} />,
      <Button name={BTN_NAME1} onClick={() => {}} />,
    ];
    const len = CHILD_COMPONENT.length;
    const { getByText, container } = render(
      <MoreButton buttons={CHILD_COMPONENT} />
    );
    const button = getByText(MORE_BTN_NAME);
    fireEvent.click(button);
    expect(container.firstChild.childNodes).toHaveLength(len);
  });
});
