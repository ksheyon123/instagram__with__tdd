import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "@/components/Common/Accordion";

const NAME1 = "1";
const DESCRIPTION1 = "DESCRIPTION1";

// Test Cases : items 수 확인, child component 렌더 확인, 열고 닫힘 확인, 아이템 삭제 확인

const mainComponent = <div>{NAME1}</div>;
const childComponent = <div>{DESCRIPTION1}</div>;

describe("Accordion component", () => {
  // const accordion = (props?: any) => <Accordion items={items} {...props} />;
  it("is on the document", () => {
    const { getByText } = render(<Accordion mainComponent={mainComponent} />);
    const title = getByText(NAME1);
    expect(title).toBeInTheDocument();
  });

  it("shows child component when the user click the accordion item", async () => {
    const { getByText, rerender } = render(
      <Accordion
        mainComponent={mainComponent}
        childComponent={childComponent}
      />
    );
    const main = getByText(NAME1);
    fireEvent.click(main);

    rerender(
      <Accordion
        mainComponent={mainComponent}
        childComponent={childComponent}
      />
    );

    const description1 = getByText(DESCRIPTION1);
    expect(description1).toBeInTheDocument();
  });

  it("hide the child component when the user click it twice!", () => {
    const { container, rerender, getByText } = render(
      <Accordion
        mainComponent={mainComponent}
        childComponent={childComponent}
      />
    );
    const main = getByText(NAME1);
    expect(container).not.toHaveTextContent(DESCRIPTION1);

    fireEvent.click(main);

    rerender(
      <Accordion
        mainComponent={mainComponent}
        childComponent={childComponent}
      />
    );
    expect(container).toHaveTextContent(DESCRIPTION1);

    fireEvent.click(main);

    rerender(<></>);
    expect(container).not.toHaveTextContent(DESCRIPTION1);
  });
});
