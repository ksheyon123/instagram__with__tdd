import { useState } from "react";

export const MainItem: React.FC = () => {
  const [] = useState<boolean>(false);

  return (
    <div className="w-full h-full">
      <div>Main</div>
    </div>
  );
};
