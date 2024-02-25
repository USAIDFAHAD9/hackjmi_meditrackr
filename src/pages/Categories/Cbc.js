import React from 'react'
import { useState } from 'react'
import { FormFieldNumber } from "../../components/FormFields"
// import { FormFieldText } from "../../components/FormFields"
import { FormFieldDate } from './../../components/FormFields'


const Cbc = () => {
  const [newRecord, SetNewRecord] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <div className="flex flex-col items-center w-full md:w-2/3  mx-auto">
      <h1 className="text-center text-5xl py-10">CBC</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <form onclick={handleSubmit}>
        <FormFieldDate name="Date" />

        <FormFieldNumber name="Hemoglobin (g/dL)" />
        <FormFieldNumber name="Packed Cell Volume (%)" />
        <FormFieldNumber name="RBC Count (mill/mm³)" />
        <FormFieldNumber name="MCV (fL)" />
        <FormFieldNumber name="MCH (pg)" />
        <FormFieldNumber name="MCHC (g/dL)" />
        <FormFieldNumber name="Red Cell Distrbution Width (%)" />
        <FormFieldNumber name="Total Leukocyte Count (thou/mm³)" />
        <FormFieldNumber name="Platelet Count (thou/mm³)" />

        <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold">
          Save Records
        </button>
      </form>
    </div>
  )
}

export default Cbc
