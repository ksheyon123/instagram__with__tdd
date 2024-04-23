import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "@/pages/login";

describe("LoginPage E2E", () => {
  it("fb logged in", () => {
    const { findByText } = render(<LoginPage />);
    const text = findByText("Facebook으로 로그인");
    const guideText = findByText(
      "계정 센터에 포함된 계정이므로 이 계정으로 로그인할 수 있습니다."
    );
    expect(text).not.toBeInTheDocument();
    expect(guideText).toBeInTheDocument();
  });
});
