import { Button as ButtonUI } from "@nextui-org/react";

interface IProps {
  name: string;
  onClick: Function;
  disabled?: boolean;
}

const Button: React.FC<IProps> = (props) => {
  const { name } = props;
  return <ButtonUI>{name}</ButtonUI>;
};

export { Button };
