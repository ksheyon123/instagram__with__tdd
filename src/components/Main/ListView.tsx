import React from "react";
import { Accordion } from "../common/Accordion/Accordion";
import { AccordionReply } from "../common/Accordion/AccordionReply";

const ListView: React.FC = () => {
  return (
    <div>
      <Accordion
        items={[]}
        mainComponent={ListItem}
        childComponent={(d) => <AccordionReply {...d} />}
      />
    </div>
  );
};

const ListItem = (props) => {
  return <></>;
};

export { ListView };
