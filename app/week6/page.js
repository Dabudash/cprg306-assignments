"use client"
import Link from "next/link"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import Item from "./item";


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = ( newItem) => {
        setItems([newItem, ...items]);
    };
    return(
        <main>
            <h1>My Shopping List </h1>
            <p></p>
            <div>
                <NewItem onSubmit={handleAddItem}/>
                <ItemList items={items} />
            </div>
            
           
        </main>
    );
    


}