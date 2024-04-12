import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "@/components/Login/LoginForm";
import { PATHNAME } from "@/constants";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const qs = new URLSearchParams({
  client_id: process.env.FACEBOOK_CLIENT_ID,
  redirect_uri: `/login/fb/callback`,
  state: "1234",
  response_type: "token",
  // display: "popup",
  auth_type: "rerequest",
  scope:
    "public_profile, instagram_basic, pages_show_list, instagram_manage_comments, pages_read_engagement",
  // scope: ", instagram_basic, pages_show_list",
});

// 확인 불가?
describe("LoginForm Component", () => {
  it("click the login using FB, redirect to FB OAuth2.0", () => {
    const mockOn = jest.fn();
    useRouter.mockReturnValue({
      replace: mockOn,
    });
    const { getByText } = render(<LoginForm />);
    const span = getByText("Facebook으로 로그인");
    const button = span.parentNode;
    fireEvent.click(button);
    expect(mockOn).toHaveBeenCalledWith(`${PATHNAME.OAUTH_FB}?${qs}`);
  });
});
