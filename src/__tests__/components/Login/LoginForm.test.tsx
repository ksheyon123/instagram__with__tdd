import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "@/components/Login/LoginForm";

jest.mock("next/router", () => ({
  useRouter: () => {},
}));

describe("LoginForm Component Login logic integration test", () => {
  it("User click the instagram social login btn", () => {
    const BUTTON_NAME = "Login with Instagram";
    const { getByText } = render(<LoginForm />);
    const component = getByText(BUTTON_NAME);
  });

  it("User redirect to current page after open auth 2.0", () => {});
});
