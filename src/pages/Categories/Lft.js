import React from 'react'
import { FormFieldNumber } from '../../components/FormFields'
import { FormFieldText } from '../../components/FormFields'
import { FormFieldDate } from './../../components/FormFields'
const Lft = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-2/3  mx-auto">
      <h1 className="text-center text-5xl py-10">LFT</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <FormFieldDate name="Date" />

      <FormFieldNumber name="AST(SGOT) (U/L)" />
      <FormFieldNumber name="ALT(SGPT) (U/L)" />
      <FormFieldNumber name="AST:ALT Ratio" />
      <FormFieldNumber name="GGTP (U/L)" />
      <FormFieldNumber name="Alkaline Phosphate (U/L)" />
      <FormFieldNumber name="Billirubin Total (mg/dL)" />
      <FormFieldNumber name="Billirubin Direct (mg/dL)" />
      <FormFieldNumber name="Billirubin Indirect (mg/dL)" />
      <FormFieldNumber name="Total Protein (g/dL)" />
      <FormFieldNumber name="Albumin (g/dL)" />
      <FormFieldNumber name="A:G Ratio" />

      <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold">
        Save Records
      </button>
    </div>
  )
}

export default Lft
