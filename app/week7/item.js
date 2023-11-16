import React from "react";
export default function Item({name, quantity, category, onSelect}) {
  const handleClick =()=>{
    onSelect(Item);
  }
    return (
        <div>
          <ul className="my-5 rounded px-2 py-2 bg-slate-900" onClick={handleClick}>
            <li className="text-x1 font-bold">{name}</li>
            <li>BUY {quantity} in {category}</li>
          </ul>
        </div>
      );

}