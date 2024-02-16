import { Input as InputUI } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;

  color?: string;
  placeholder?: string;
  errorMsg?: string;
  disabled?: boolean;
}

const Input: React.FC<IProps> = (props) => {
  const { value, onChange, errorMsg, placeholder, disabled } = props;
  return (
    <div>
      <InputUI
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
};

export { Input };
