import { useRouter } from "next/router";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockPush = jest.fn();

(useRouter as jest.Mock).mockImplementation(() => ({
  mockPush,
}));

describe("useAuthHook", () => {
  it("go to fb", () => {});
  it("go to ig", () => {});
  it("success to get ig profile", () => {});
  it("fail to get ig profile", () => {});
  it("loginWithFB method return false if api cannot return ig profile", () => {});
});
