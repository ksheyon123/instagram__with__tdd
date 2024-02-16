import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Input } from "@/components/common/Input";

describe("Input Component with placeholder", () => {
  it("which receives email, phonenumber & account", () => {
    const LABEL = "전화번호, 사용자 이름 혹은 이메일";
    const { getByText } = render(
      <Input value="" onChange={() => {}} placeholder={LABEL} />
    );
  });
});
