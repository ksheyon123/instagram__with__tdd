import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PATHNAME } from "@/constants";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const qs = new URLSearchParams({
  client_id: process.env.INSTAGRAM_CLIENT_ID,
  redirect_uri: "/login/callback",
  response_type: "code",
  scope: "user_profile,user_media",
});

describe("LoginOAuth component", () => {
  it("component shows username", () => {
    const { container } = render(<></>);
    expect(container).toHaveValue("");
  });
  it("component request IG OAuth 2.0", () => {
    const mockOn = jest.fn();
    useRouter.mockReturnValue({
      replace: mockOn,
    });
    const { getByText } = render(<></>);
    const span = getByText("로그인");
    const button = span.parentNode;
    fireEvent.click(button);
    expect(mockOn).toHaveBeenCalledWith(`${PATHNAME.OAUTH_IG}?${qs}`);
  });
});
