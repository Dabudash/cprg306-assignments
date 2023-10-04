"use client";

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);
    const handleSubmit = (item)=>{
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        alert("Submitting:"+ name, + quantity, + category);

        setItemCreated(true);

        setName("");
        setQuantity("");
        setCategory("");
        
    
        setEventCreated(false);
      };
    
      const handleNameChange = (item) => {
        setName(item.target.value);
      };
    
      const handleDateChange = (item) => {
        setQuantity(item.target.value);
      };
    
      const handleLocationChange = (item) => {
        setCategory(item.target.value);
      };
      
      return(
        
      );



    }
    
