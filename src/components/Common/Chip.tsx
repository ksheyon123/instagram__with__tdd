import { Chip as ChipUI, extendVariants } from "@nextui-org/react";

interface IProps {
  name: string;
  isDisabled?: boolean;
  onClick?: Function;
}

const CustomUI = extendVariants(ChipUI, {
  variants: {
    isDisabled: {},
  },
});

export const Chip: React.FC<IProps> = ({
  name,
  isDisabled = false,
  onClick,
}) => {
  return (
    <ChipUI
      //   className={`${isDisabled ? "disabled" : ""}`}
      isDisabled={isDisabled}
      onClick={() => onClick()}
    >
      {name}
    </ChipUI>
  );
};
