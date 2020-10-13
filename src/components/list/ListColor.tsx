import React from "react";
import "./ListColor.scss";

type Props = {
  items: string[];
};

const ListColor: React.FC<Props> = ({ items }) => {
  console.log(items);

  return (
    <div className="list-container">
      {items.map((element: string, index) => (
        <div
          className="list-item"
          key={index}
          style={{
            backgroundColor: element,
          }}
        ></div>
      ))}
    </div>
  );
};
export default ListColor;
