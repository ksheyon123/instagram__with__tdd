import { Button as ButtonUI, extendVariants } from "@nextui-org/react";
import { MouseEventHandler } from "react";

interface IProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const DefaultButton = extendVariants(ButtonUI, {
  variants: {
    color: {
      default:
        "bg-[#0094f6] text-[#FFF] opacity-70 data-[hover=true]:opacity-100",
    },
    defaultVariants: {
      color: "default",
    },
  },
});

const Button: React.FC<IProps> = (props) => {
  const { name, onClick, disabled = false } = props;
  return (
    <DefaultButton color="default" onClick={onClick} disabled={disabled}>
      {name}
    </DefaultButton>
  );
};

export { Button };
