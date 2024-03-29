import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { PATHNAME } from "@/constants";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockPush = jest.fn();

(useRouter as jest.Mock).mockImplementation(() => ({
  mockPush,
}));

describe("LNB component", () => {
  it("shows icons", () => {
    const { container } = render(<></>);
    expect(container).toContainEqual(5);
  });

  it("go to home", () => {
    const { getByText } = render(<></>);
    fireEvent.click(getByText(""));
    expect(mockPush).toHaveBeenCalledWith(PATHNAME.DASHBOARD);
  });
  it("show add modal", () => {
    const { container } = render(<></>);
    const modal = container.getElementsByClassName("modal-add");
    expect(modal).toBeInTheDocument();
  });
  it("show logout modal", () => {
    const { container } = render(<></>);
    const modal = container.getElementsByClassName("modal-user");
    expect(modal).toBeInTheDocument();
  });
});
