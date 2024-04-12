import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "@/components/Login/LoginForm";

jest.mock("next/router", () => ({
  useRouter: () => {},
}));

// 확인 불가?
describe("LoginForm Component OAuth2.0 test", () => {
  it("is mounted", () => {
    const { getByText } = render(<LoginForm />);
    const mounted = getByText("Mounted");
    expect(mounted).toBeInTheDocument();
  });

  it("User click the instagram social login btn", () => {
    const BUTTON_NAME = "Login with Instagram";
    const { getByText } = render(<LoginForm />);
    const component = getByText(BUTTON_NAME);
  });

  it("the user redirect to current page after facebook oauth 2.0", () => {});

  it("the user redirect to current page after instagram oauth 2.0", () => {});
});
