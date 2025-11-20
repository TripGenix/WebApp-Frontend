import { useState } from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";

export default function DynamicList({ title = "Add Destination" }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label className="text-gray-900 text-[15px] font-medium">{title}</label>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-xl text-gray-800"
          >
            <span>{item}</span>
            <FiTrash2
              className="text-red-500 cursor-pointer hover:text-red-600"
              onClick={() => removeItem(index)}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter location"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="
            w-full bg-white border border-gray-300 rounded-md 
            px-4 py-3 text-gray-700 focus:outline-none focus:border-gray-400
          "
        />

        <button
          onClick={addItem}
          className="bg-[#0F3B45] text-white px-4 py-3 rounded-md flex items-center gap-2 hover:bg-[#0c2e36]"
        >
          Add <FiPlus />
        </button>
      </div>
    </div>
  );
}
