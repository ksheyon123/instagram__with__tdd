import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MoreButton } from "@/components/Basic/MoreButton";
import { Button } from "@/components/Basic/Button";

const mockFn = jest.fn();

describe("More button component", () => {
  const MORE_BTN_NAME = "More";
  const BTN_NAME0 = "BTN0";
  const BTN_NAME1 = "BTN1";

  const mockBtn0 = <Button name={BTN_NAME0} onClick={mockFn} />;
  const mockBtn1 = <Button name={BTN_NAME1} onClick={mockFn} />;

  it("Component on the DOM", () => {
    const { container } = render(<MoreButton buttons={[]} />);
    expect(container).toBeInTheDocument();
  });

  it("receives single child component", () => {
    const CHILD_COMPONENT = mockBtn0;
    const { getByText } = render(<MoreButton buttons={CHILD_COMPONENT} />);
    const button = getByText(MORE_BTN_NAME);
    fireEvent.click(button);
    const childBtn = getByText(BTN_NAME0);
    expect(childBtn).toBeInTheDocument();
  });

  it("click the More button", () => {
    const CHILD_COMPONENT = [mockBtn0, mockBtn1];
    const len = CHILD_COMPONENT.length;
    const { getByText, container } = render(
      <MoreButton buttons={CHILD_COMPONENT} />
    );
    const button = getByText(MORE_BTN_NAME);
    fireEvent.click(button);
    expect(container.firstChild.childNodes).toHaveLength(len);
  });

  it("return to more btn", () => {});
});
