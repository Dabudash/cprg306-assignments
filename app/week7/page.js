"use client";
import Link from "next/link"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import Item from "./item";
import MealIdeas from "./meal-ideas"


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = ( newItem) => {
        setItems([newItem, ...items]);
    
    };
    const [cleanName, setCleanName] = useState('');
    const handleItemSelect = (itemName) => {
        const cleanName = itemName.split(',')[0].replace(/,.*|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼|🍽️/g, '').trim();
        setCleanName(cleanName);
    }
    return(
        <main>
            <h1>My Shopping List </h1>
            <p></p>
            <div>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onSubmit={handleItemSelect} />
            </div>
            <div className="flex-1 max-w-sm m-2">
                <h2 className="text-m text-white">
                    <MealIdeas ingredient={cleanName}/>
                </h2>
                
            </div>
            
           
        </main>
    );
    


}