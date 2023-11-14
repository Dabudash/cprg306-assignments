"use client";

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);
    const handleSubmit = (item)=>{
        item.preventDefault();

        const newItem = {
            name,
            quantity,
            category
        };
        console.log(newItem);
        alert(`${quantity} ${name} from ${category} added successfully!`);
        setItemCreated(true);

       /* setName("");
        setQuantity("");
        setCategory("");*/
        
    
        setItemCreated(false);
      };
    
      const handleNameChange = (item) => {
        setName(item.target.value);
      };
    
      const handleQuantityChange = (item) => {
        setQuantity(item.target.value);
      };
    
      const handleCategoryChange = (item) => {
        setCategory(item.target.value);
      };
      
      return(
        <main>
          <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
            {NewItem && (
              <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                Creating Item 
              </div>
            )}
        
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-2xl text-gray-800 font-bold mb-8">
                 Create New Item
              </h1>


              <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                <label className="block mb-4 ">
                <span className="text-gray-800">Item name:</span>
                <input
                requiredonChange={handleNameChange}
                value={name}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"/>
                </label>


                <label className="block mb-4">
                 <span className="text-gray-800">Quantity:</span>
                 <input
                 required
                 onChange={handleQuantityChange}
                 value={quantity}
                 className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"/>
                </label>
                
                
                <label className="block mb-4 ">
                  <span className="text-gray-800">Item Category:</span>
                  <select className="mt-1 border-2 p-1 w-60 block w-full rounded-md text black bg-gray-100 focus:bg-white"
                        value={category} onChange={handleCategoryChange}>
                    <option disabled>Category</option>
                    <option value='Produce'selected>Produce</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Bakery'>Bakery</option>
                    <option value='Meat'>Meat</option>
                    <option value='Frozen Foods'>Frozen Foods</option>
                    <option value='Canned Goods'>Canned Goods</option>
                    <option value='Dry Goods'>Dry Goods</option>
                    <option value='Beverages'>Beverages</option>
                    <option value='Snacks'>Snacks</option>
                    <option value='Household'>Household</option>
                    <option value='Other'>Other</option>
                  </select>
                </label>

                <button
                type="submit"
                className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white">
                  Create Item
            </button>
          </form>
        </div>
      </div>
    </main>
      )
    }
    
