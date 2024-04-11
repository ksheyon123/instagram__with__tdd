import { useRouter } from "next/router";

import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ToggleModalItem } from "@/types/types";
import { PATHNAME } from "@/constants";
import { ToggleModal } from "@/components/modal/ToggleModal";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockPush = jest.fn();

(useRouter as jest.Mock).mockImplementation(() => ({
  mockPush,
}));

describe("DBoardItem component", () => {
  it("", () => {});
  it("", () => {});
  it("", () => {});
  it("", () => {});
});
