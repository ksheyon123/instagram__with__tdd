import { styles } from "@/styles";
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
      inputColor: {
        inputWrapper: [
          "shadow-none",
          `border-gray219`,
          `bg-gray250`,
          `focus-within:bg-gray250`,
          `data-[hover=true]:border-gray168`,
          `data-[hover=true]:bg-gray250`,
          `group-data-[focus=true]:border-gray168`,
          `group-data-[focus=true]:bg-gray250`,
        ],
        input: ["text-black"],
      },
    },
    size: {
      md: {
        inputWrapper: "px-0 border",
        input: "pl-[8px] pt-[9px] pb-[7px] text-xs",
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
        color="inputColor"
        size="md"
        radius="md"
        value={"12"}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
};

export { Input };
