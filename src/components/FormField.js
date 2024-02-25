import React from "react";

const FormField = () => {
  return (
      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-row justify-between w-3/6 mid:w-1/2 m-auto items-center text-lg"> 
          <span className="text-white font-bold">Hemoglobin (g/dL)</span>
          <input type="number" step="0.01" className="pl-8 py-2 rounded-lg"></input>
      </div>
  );
};

export default FormField;
