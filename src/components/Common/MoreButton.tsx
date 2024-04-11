import React, { ReactNode, useEffect, useState } from "react";

interface IMoreBtnProps {
  buttons: Object | ReactNode | ReactNode[];
  icon?: ReactNode;
}

export const MoreButton: React.FC<IMoreBtnProps> = ({ icon, buttons }) => {
  const isArray = Array.isArray(buttons);
  const newButtons = isArray ? buttons : [buttons];
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="more-btn">
      {!toggle && (
        <div className="" onClick={() => setToggle((prev) => !prev)}>
          {!!icon ? icon : "More"}
        </div>
      )}
      {toggle && (
        <div className="flex flex-row">
          {newButtons.map((el) => {
            return el;
          })}
          <div
            className="w-2 h-full ml-1 hover:bg-gray219"
            onClick={() => setToggle((prev) => !prev)}
          >
            :
          </div>
        </div>
      )}
    </div>
  );
};
