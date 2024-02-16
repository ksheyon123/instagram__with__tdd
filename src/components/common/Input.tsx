import { Input as InputUI } from "@nextui-org/react";

interface IProps {
  value: string;
  onChange: Function;

  color?: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = (props) => {
  return <InputUI />;
};

export { Input };
