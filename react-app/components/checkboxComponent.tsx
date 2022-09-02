import React from "react";
const CheckboxComponent = ({ list }) => {
  return (
    <div>
      {list?.map((item, index) => (
        <div key={index}>
          <input
            style={{ fontStyle: "normal" }}
            type="checkbox"
            id={item.focus}
            value={item.focus}
            checked={item.isAdded}
            onChange={(e) => onAddingItem(e, item, index)}
          />
          <label>{item.focus}</label>
        </div>
      ))}
    </div>
  );
};
export default CheckboxComponent;
function onAddingItem(
  e: React.ChangeEvent<HTMLInputElement>,
  item: any,
  index: any
): void {
  throw new Error("Function not implemented.");
}
