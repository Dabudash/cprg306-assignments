"use client"

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b)=>{
        if (sortBy === "name"){
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category"){
            return a.category.localeCompare(b.category);
        }
    });


    return (
        <div>
            <button style={{ backgroundColor: sortBy === "name" ? "Yellow" : "White"}} onClick={() => setSortBy("name")} className="bg-grey-500 hover:bg-grey-700 text-black font-bold py-2 px-4 rounded">
                SORT BY NAME
            </button>
            <button style={{ backgroundColor: sortBy === "category" ? "Yellow" : "White"}} onClick={() => setSortBy("category")} className="bg-grey-500 hover:bg-grey-700 text-black font-bold py-2 px-4 rounded">
                SORT BY CATEGORY
            </button>
           
       
                {sortedItems.map(item => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
        </div>
          
    );
};