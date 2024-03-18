import { styles } from "@/styles";
import { Button as ButtonUI, extendVariants } from "@nextui-org/react";
import { MouseEventHandler } from "react";

interface IProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  btnStyleType?: "default" | "fb0";
}

const btnStyle = {
  default:
    "bg-hfb0 text-white opacity-70 data-[hover=true]:opacity-100 w-full h-8",
  fb0: "bg-transparent text-fb0 text-[14px] h-auto px-0",
};

const Button: React.FC<IProps> = (props) => {
  const { name, onClick, disabled = false, btnStyleType = "default" } = props;
  return (
    <button
      className={`${btnStyle[btnStyleType]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export { Button };
