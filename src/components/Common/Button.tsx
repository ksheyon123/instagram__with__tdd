import { styles } from "@/styles";
import { Button as ButtonUI, extendVariants } from "@nextui-org/react";
import { MouseEventHandler } from "react";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  name?: string;
  img?: string;
  disabled?: boolean;
  btnStyleType?: "default" | "fb0";
  style?: any;
}

const btnStyle = {
  default:
    "w-full h-8 bg-hfb0 text-white opacity-70 data-[hover=true]:opacity-100 rounded-lg",
  fb0: "block w-auto h-auto bg-transparent text-fb0 text-[14px] px-0 text-center",
};

const Button: React.FC<IProps> = (props) => {
  const {
    name,
    onClick,
    img,
    disabled = false,
    btnStyleType = "default",
    style,
  } = props;
  return (
    <button
      style={style}
      className={`${btnStyle[btnStyleType]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {img && <img src={img} />}
      {!!name && <span>{name}</span>}
    </button>
  );
};

export { Button };
