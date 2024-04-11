import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Comments, Comment } from "@/components/Common/Comments";
import exp from "constants";

// Test Cases : 댓글 텍스트, 작성 버튼
const COMMENT1 = "Comment1";
const REPLY1 = "Reply1";

const moreBtnName = "More";
const likeBtnName = "Like";
const rmBtnName = "Remove";
beforeAll(() => {
  render(<></>);
});

describe("Comments component", () => {
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

describe("More Btn in the Comments Component", () => {
  it("click the more btn", () => {
    const { getByText, getAllByText } = render(<Comments />);

    const moreBtn = getAllByText(moreBtnName)[0];
    fireEvent.click(moreBtn);

    const likeBtn = getByText(likeBtnName);
    const removeBtn = getByText(rmBtnName);
    expect(likeBtn).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });

  it("click the like btn", () => {
    const { getByText, getAllByText } = render(<Comments />);
    const moreBtn = getAllByText(moreBtnName)[0];
    fireEvent.click(moreBtn);

    const likeBtn = getByText(likeBtnName);
    fireEvent.click(likeBtn);

    const comment1 = getByText(COMMENT1);
    expect(comment1.parentNode).toHaveClass("like");
  });

  it("click the remove btn", () => {
    const { getByText, getAllByText, container } = render(<Comments />);

    const moreBtn = getAllByText(moreBtnName)[0];
    fireEvent.click(moreBtn);

    // Before click the remove btn
    expect(container.childNodes[0].childNodes).toHaveLength(2);

    const removeBtn = getByText(rmBtnName);
    fireEvent.click(removeBtn);

    // After click the remove btn
    expect(container.childNodes[0].childNodes).toHaveLength(1);
  });
});
