import React from "react";
type Props = {
  items: string[];
};
const ListColor: React.FC<Props> = ({ items }) => {
  return (
    <div style={{ width: "100%" }}>
      {items.map((element: string) => (
        <div
          style={{ width: 100, height: 100, backgroundColor: element }}
        ></div>
      ))}
    </div>
  );
};
export default ListColor;
