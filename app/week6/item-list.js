"use client";

import { useState } from "react";
import Item from "../week3/item";



export default function ItemList({items, onSubmit}){
    const handleAddItem = (newItem) => {
        const updateItems = [newItem, ...items];
        onSubmit(updateItems);
    }
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b)=>{
        if (sortBy === "name"){
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category"){
            return a.category.localeCompare(b.category);
        }
    });

    const renderSortButton= () =>{
        return (
            <div className="flex justify-left ml-7 space-x-5 w-full">
                <button className="block mb-4 bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-2 px-4 rounded" onClick={() => setSortBy("name")}>Name</button>
                <button className="block mb-4 bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-2 px-4 rounded" onClick={() => setSortBy("category")}>Category</button>
            </div>
        );
       
    };


    return (
        <div>
            {renderSortButton()}
                {sortedItems.map((item) => (
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