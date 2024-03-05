import { getAccounts } from "@/apis/api";
import { Accordion } from "@/components/common/Accordion/Accordion";
import { jwtAtom } from "@/states/atom";
import { AccordionItem } from "@/types/types";
import { useAtom } from "jotai";

const NAME1 = "1";
const DESCRIPTION1 = "DESCRIPTION1";
const NAME2 = "2";
const DESCRIPTION2 = "DESCRIPTION2";
let items: AccordionItem[] = [
  { name: NAME1, description: DESCRIPTION1 },
  { name: NAME2, description: DESCRIPTION2 },
];

const LoggedIn: React.FC = () => {
  const [jwt, setJwt] = useAtom(jwtAtom);
  const onClick = () => {
    getAccounts(jwt);
  };
  return (
    <div>
      <Accordion
        items={items}
        onClick={(d) => {
          console.log(d);
          const idx = items.findIndex((e) => e.name === d.name);
          console.log(idx);
          if (idx >= 0) {
            items[idx].active = !items[idx]?.active;
            console.log(items);
          }
        }}
      />
    </div>
  );
};

export default LoggedIn;
