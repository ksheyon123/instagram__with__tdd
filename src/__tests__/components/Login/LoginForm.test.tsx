import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "@/components/Login/LoginForm";
import exp from "constants";

describe("LoginForm Component Login logic integration test", () => {
  it("when the user insert the user email", () => {
    const PLACEHOLDER = "전화번호, 사용자 이름 혹은 이메일";
    const USER_EMAIL = "test@test.com";
    const { getByPlaceholderText, getByDisplayValue } = render(<LoginForm />);
    const input = getByPlaceholderText(PLACEHOLDER);
    fireEvent.change(input, { target: { value: USER_EMAIL } });
    const inputWithValue = getByDisplayValue(USER_EMAIL);
    expect(inputWithValue).toBeInTheDocument();
  });

  it("when the user click button without user input", () => {
    const ERROR_MSG = "There is no user input";
    const { getByText } = render(<LoginForm />);
    const button = getByText("Login");
    fireEvent.click(button);

    waitFor(() => {
      const errorMsg = getByText(ERROR_MSG);
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
