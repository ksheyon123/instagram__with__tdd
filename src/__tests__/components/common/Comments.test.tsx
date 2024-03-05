import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Comments } from "@/components/common/Comments";

// Test Cases : 댓글 텍스트, 작성 버튼
const COMMENT1 = "Comment1";
const REPLY1 = "Reply1";

describe("Comment component", () => {
  it("which shows title", () => {
    const { getByText } = render(<Comments />);
    const comment = getByText(COMMENT1);
    expect(comment).toBeInTheDocument();
  });

  it("show reply", () => {
    const { getByText } = render(<Comments />);
    const comment = getByText(COMMENT1);
    fireEvent.click(comment);
    const reply = getByText(REPLY1);
    expect(reply).toBeInTheDocument();
  });
});
