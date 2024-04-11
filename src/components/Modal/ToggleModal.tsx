import { ToggleModalItem } from "@/types/types";
import { List } from "@/components/Common/List";

import ArrowBack from "@/assets/icons/arrow_back_icon.svg";

interface IProps {
  items: ToggleModalItem[];
}

const ToggleModal: React.FC<IProps> = (props) => {
  const { items } = props;
  return (
    <div
      className={`sm:fixed sm:bottom-0 sm:left-0 sm:w-screen absolute left-0 top-0 bg-white z-[3] w-[200px] rounded-[6px]`}
      style={{
        filter: "drop-shadow(0 0 5px rgba(0,0,0,0.0975))",
      }}
    >
      <div
        className="sm:block hidden py-2 pl-2 cursor-pointer"
        onClick={() => {}}
      >
        <ArrowBack />
      </div>
      <div className="flex flex-col w-full h-full rounded-[6px]">
        <List
          items={items}
          child={(data) => {
            const { title, icon } = data;
            return (
              <div className="flex h-[44px] px-4 py-2 sm:border-b">
                <div className="flex flex-row justify-between items-center grow">
                  <div>
                    <span className="text-[16px]">{title}</span>
                  </div>
                  <div>{icon}</div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export { ToggleModal };
