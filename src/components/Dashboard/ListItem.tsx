import { InstagramContent } from "@/types/types";
import { ChildItem } from "./ChildItem";
import { MainItem } from "./MainItem";

interface IProps extends InstagramContent {}

export const ListItem: React.FC<IProps> = (props) => {
  const onClick = () => {};
  return (
    <>
      <MainItem {...props} />
      {/* <ChildItem /> */}
    </>
  );
};
