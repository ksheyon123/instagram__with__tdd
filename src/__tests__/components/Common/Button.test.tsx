import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/components/common/Button";

describe("Button Component", () => {
  it("which receives button name", () => {
    const BUTTON_NAME = "버튼 이름";
    const { getByText } = render(
      <Button name={BUTTON_NAME} onClick={() => {}} />
    );
    const component = getByText(BUTTON_NAME);
    expect(component).toBeInTheDocument();
  });

  it("which is clicked", () => {
    const mockCall = jest.fn();
    const BUTTON_NAME = "버튼 이름";
    const { getByText } = render(
      <Button name={BUTTON_NAME} onClick={mockCall} />
    );
    const component = getByText(BUTTON_NAME);
    fireEvent.click(component);
    expect(mockCall).toHaveBeenCalledTimes(1);
  });
});
