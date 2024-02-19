import { Button as ButtonUI } from "@nextui-org/react";
import { MouseEventHandler } from "react";

interface IProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  const { name, onClick, disabled = false } = props;
  return (
    <ButtonUI onClick={onClick} disabled={disabled}>
      {name}
    </ButtonUI>
  );
};

export { Button };
