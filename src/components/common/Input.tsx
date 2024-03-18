import { Input as InputUI, extendVariants } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;

  color?: string;
  placeholder?: string;
  errorMsg?: string;
  disabled?: boolean;
}

const DefaultInputUI = extendVariants(InputUI, {
  variants: {
    color: {
      stone: {
        inputWrapper: [""],
      },
    },
    size: {
      md: {
        innerWrapper: "pl-px-0",
      },
    },
    radius: {
      md: {
        inputWrapper: "rounded-[4px]",
      },
    },
  },
});

const Input: React.FC<IProps> = (props) => {
  const { value, onChange, errorMsg, placeholder, disabled } = props;
  return (
    <div>
      <DefaultInputUI
        size="md"
        radius="md"
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
