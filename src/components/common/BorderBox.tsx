import { ChildrenProps } from "@/types/types";
import { styles } from "@/styles";

export const BorderBox: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div
      className={`flex py-2 border border-solid border-[${styles.COLOR.GRAY0}] rounded md:w-[640px] lg:w-[1280px]`}
    >
      {children}
    </div>
  );
};
