import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("The CheckBox Component", () => {
  const CHECK_BOX_LABEL = "";
  it("Component with label", () => {
    const { getByText } = render(<></>);
    const chkBox = getByText(CHECK_BOX_LABEL);
    expect(chkBox).toBeInTheDocument();
  });
  it("When the user click the checkbox, it will be filled.", () => {
    const component = render(<></>);
    const { getByRole } = component;
    const chkBox = getByRole("checkbox");
    fireEvent.click(chkBox);
    component.rerender(<></>);
    expect(chkBox).toBeChecked();
    expect(chkBox).toHaveBeenCalledTimes(1);
  });
});
