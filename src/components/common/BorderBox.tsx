import { ChildrenProps } from "@/types/types";
import { styles } from "@/styles";

export const BorderBox: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div
      className={`py-2 border border-solid border-[${styles.COLOR.GRAY0}] rounded`}
    >
      {children}
    </div>
  );
};
