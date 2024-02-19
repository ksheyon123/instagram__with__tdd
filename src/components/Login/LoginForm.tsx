import { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

const LoginForm: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const validate = (input) => {
    if (!input) return 404;
    return 200;
  };
  const onClick = () => {
    const isValid = validate(input);
    if (isValid !== 200) {
      return setErrorMsg("There is no user input");
    }
  };
  return (
    <div>
      <Input
        placeholder="전화번호, 사용자 이름 혹은 이메일"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        errorMsg={errorMsg}
      />
      <Input
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        errorMsg={errorMsg}
      />
      <Button name="Login" onClick={onClick} />
    </div>
  );
};

export { LoginForm };
