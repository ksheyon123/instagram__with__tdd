import { useRouter } from "next/router";

import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ToggleModalItem } from "@/types/types";
import { PATHNAME } from "@/constants";
import { ToggleModal } from "@/components/Modals/ToggleModal";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockPush = jest.fn();

(useRouter as jest.Mock).mockImplementation(() => ({
  mockPush,
}));

describe("ToggleModal component", () => {
  const ITEM_1_NAME = "Test Item 1";
  const ITEM_2_NAME = "Test Item 2";
  const items: ToggleModalItem[] = [
    {
      title: ITEM_1_NAME,
      icon: "",
      url: PATHNAME.DASHBOARD,
    },
    {
      title: ITEM_2_NAME,
      icon: "",
      url: PATHNAME.DASHBOARD,
    },
  ];

  it("it has items length = 2", () => {
    const { getByRole } = render(<ToggleModal items={items} />);
    const roleOfList = getByRole("list");
    const numberOfChild = roleOfList.childNodes.length;
    expect(numberOfChild).toEqual(items.length);
  });

  it("user click the item will guide you to the other page", () => {
    const { getByText } = render(<ToggleModal items={items} />);
    fireEvent.click(getByText(ITEM_1_NAME));
    expect(mockPush).toHaveBeenCalledWith(PATHNAME.DASHBOARD);
  });

  // After
  // it("it shows close btn on mobile size resolution", () => {
  //   const { container } = render(<></>);
  // });
});
