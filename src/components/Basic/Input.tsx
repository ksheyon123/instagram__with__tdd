import { styles } from "@/styles";
import { Input as InputUI, extendVariants } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;

  name?: string;
  style?: any;
  placeholder?: string;
  errorMsg?: string;
  disabled?: boolean;
}

const DefaultInputUI = extendVariants(InputUI, {
  variants: {
    color: {
      default: {
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
      secondary: {
        inputWrapper: [
          "shadow-none",
          "border-none",
          "bg-transparent",
          "text-gray219",
          `focus-within:bg-transparent`,
          `data-[hover=true]:border-transparent`,
          `data-[hover=true]:bg-transparent`,
          `group-data-[focus=true]:border-transparent`,
          `group-data-[focus=true]:bg-transparent`,
        ],
        input: ["text-gray219", "placeholder:text-gray219"],
      },
    },
    size: {
      default: {
        inputWrapper: "px-0 border",
        input: "pl-[8px] pt-[9px] pb-[7px] text-xs",
      },
      secondary: {
        inputWrapper: "px-0 h-[18px] min-h-[0px]",
        input: "inline text-xs",
      },
    },
    radius: {
      default: {
        inputWrapper: "rounded-[4px]",
      },
      secondary: {},
    },
  },
});

const Input: React.FC<IProps> = (props) => {
  const {
    value,
    onChange,
    name = "",
    errorMsg,
    placeholder,
    disabled,
    style = "default",
  } = props;
  return (
    <div>
      <DefaultInputUI
        name={name}
        color={style}
        size={style}
        radius={style}
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
