import { Button } from "@nextui-org/react";
import { Input } from "./Input";
import { Accordion } from "./Accordion";

interface IRepliesProps {
  items: Title[];
}

type Title = {
  title: any;
};

export const Replies: React.FC<IRepliesProps> = ({ items }) => {
  return (
    <Accordion
      items={items}
      mainComponent={(d) => <Title {...d} />}
      childComponent={(d) => <Child {...d} />}
    />
  );
};

const Title: React.FC<Title> = ({ title }) => <div>{title}</div>;
const Child: React.FC<Title> = ({ title }) => <div>{title}</div>;
