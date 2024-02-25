import React from 'react'
import { FormFieldNumber } from '../../components/FormFields'
import { FormFieldText } from '../../components/FormFields'
import { FormFieldDate } from './../../components/FormFields'
const Urinalysis = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-2/3  mx-auto">
      <h1 className="text-center text-5xl py-10">Urinalysis</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <FormFieldDate name="Date" />

      <FormFieldText name="Color" />
      <FormFieldText name="Form &#47; Consistency" />
      <FormFieldText name="Mucus" />
      <FormFieldText name="Visible Blood" />
      <FormFieldText name="Reaction" />
      <FormFieldNumber name="Pus Cells (/hpf)" />
      <FormFieldNumber name="RBC (/hpf)" />
      <FormFieldText name="Macrophages" />
      <FormFieldText name="Trophozoites" />
      <FormFieldText name="Cysts" />
      <FormFieldText name="Helminthic Ova" />
      <FormFieldText name="Larva" />

      <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold">
        Save Records
      </button>
    </div>
  )
}

export default Urinalysis
