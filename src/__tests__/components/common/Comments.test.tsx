import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Comments, Comment } from "@/components/common/Comments";
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
    const { getByText, getAllByText } = render(<Comments />);

    const moreBtn = getAllByText(moreBtnName)[0];
    fireEvent.click(moreBtn);

    const removeBtn = getByText(rmBtnName);
    const comment1 = getByText(COMMENT1);
    fireEvent.click(removeBtn);

    expect(comment1).toHaveLength(0);
  });
});

// describe("Comment component", () => {
//   it("When the user clicked the like btn, it is high-lighted", () => {
//     const{} = render(<></>)
//   });
//   it("When the user clicked the rm btn, item on the list is removed", () => {});
// });
