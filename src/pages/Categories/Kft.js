import React from 'react'
import { FormFieldNumber } from '../../components/FormFields'
import { FormFieldText } from '../../components/FormFields'
import { FormFieldDate } from './../../components/FormFields'
const Kft = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-2/3  mx-auto">
      <h1 className="text-center text-5xl py-10">KFT</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <FormFieldDate name="Date" />

      <FormFieldNumber name="Creatinine (mg/dL)" />
      <FormFieldNumber name="GFR Estimated (mL)" />
      <FormFieldNumber name="Urea (mg/dL)" />
      <FormFieldNumber name="Urea Nitrogen Blood (mg/dL)" />
      <FormFieldNumber name="Uric Acid (mg/dL)" />
      <FormFieldNumber name="Total Protein (g/dL)" />
      <FormFieldNumber name="Albumin (g/dL)" />
      <FormFieldNumber name="Globulin (g/dL)" />
      <FormFieldNumber name="Calcium (mg/dL)" />
      <FormFieldNumber name="Phophorus (mg/dL)" />
      <FormFieldNumber name="Sodium (mEq/dL)" />
      <FormFieldNumber name="Potassium (mEq/dL)" />
      <FormFieldNumber name="Chloride (mEq/dL)" />

      <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold">
        Save Records
      </button>
    </div>
  )
}

export default Kft
