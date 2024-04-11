import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Input } from "@/components/Common/Input";

describe("Input Component", () => {
  const props = {
    value: "",
    onChange: () => {},
  };
  it("which receives email, phonenumber & account", () => {
    const LABEL = "전화번호, 사용자 이름 혹은 이메일";
    const { getByPlaceholderText } = render(
      <Input {...props} placeholder={LABEL} />
    );
    const component = getByPlaceholderText(LABEL);
    expect(component).toBeInTheDocument();
  });

  it("which received user input", () => {
    const USER_INPUT = "sample@email.com";
    const { getAllByDisplayValue } = render(
      <Input {...props} value={USER_INPUT} />
    );
    const component = getAllByDisplayValue(USER_INPUT)[0];
    expect(component).toBeInTheDocument();
  });

  it("which returns error msg", () => {
    const ERROR_MSG = "올바르지 않은 계정입니다.";
    const { getByText } = render(<Input {...props} errorMsg={ERROR_MSG} />);
    const component = getByText(ERROR_MSG);
    expect(component).toBeInTheDocument();
  });

  it("which is disabled", () => {
    const LABEL = "전화번호, 사용자 이름 혹은 이메일";
    const { getByPlaceholderText } = render(
      <Input {...props} placeholder={LABEL} disabled={true} />
    );
    const component = getByPlaceholderText(LABEL);
    expect(component).toBeDisabled();
  });
});
