import { Accordion } from "./Accordion";
import { AccordionInput } from "./AccordionInput";

export const AccordionReply: React.FC = (props) => {
  const {} = props;
  return (
    <Accordion
      items={[]}
      mainComponent={() => <></>}
      childComponent={(d) => <AccordionInput {...d} />}
    />
  );
};
