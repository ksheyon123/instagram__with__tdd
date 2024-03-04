import React, { ReactNode, useEffect, useState } from "react";

interface IMoreBtnProps {
  buttons: ReactNode | ReactNode[];
}

export const MoreButton: React.FC<IMoreBtnProps> = ({ buttons }) => {
  const isArray = Array.isArray(buttons);
  const newButtons = isArray ? buttons : [buttons];
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="more-btn">
      {!toggle && <div onClick={() => setToggle((prev) => !prev)}>More</div>}
      {toggle &&
        newButtons.map((el) => {
          return el;
        })}
    </div>
  );
};
