import React from 'react'
import FormField from '../../components/FormFields'
const Cbc = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-2/3  mx-auto">
      <h1 className="text-center text-5xl py-10"> CBC</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <FormField name="Hemoglobin (g/dL)" />
      <FormField name="Packed Cell Volume (%)" />
      <FormField name="RBC Count (mill/mm³)" />
      <FormField name="MCV (fL)" />
      <FormField name="MCH (pg)" />
      <FormField name="MCHC (g/dL)" />
      <FormField name="Red Cell Distrbution Width (%)" />
      <FormField name="Total Leukocyte Count (thou/mm³)" />
      <FormField name="Platelet Count (thou/mm³)" />
      <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold">
        Save Records
      </button>
    </div>
  )
}

export default Cbc
