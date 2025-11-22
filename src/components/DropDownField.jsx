const DropDownField = ({ label, options = [], value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      
      <select
        value={value}
        onChange={onChange}
        className="
          w-full bg-white text-gray-700 
          border border-gray-300 
          rounded-md px-4 py-3 
          focus:outline-none focus:border-gray-400
          placeholder:text-gray-400
          shadow-sm
        "
      >
        <option value="">Select {label}</option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownField;
