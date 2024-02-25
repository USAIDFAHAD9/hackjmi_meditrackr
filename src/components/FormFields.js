import React from 'react'

export const FormFieldNumber = (props) => {
  return (
    <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-1/2 m:w-2/3 w-4/5  m-auto items-center text-lg">
      <span className="text-white font-bold" categoryName="cbc">
        {props.name}
      </span>
      <input type="number" step="0.01" className="pl-8 py-2 rounded-lg"></input>
    </div>
  )
}

export const FormFieldText = (props) => {
  return (
    <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-1/2 m:w-2/3 w-4/5  m-auto items-center text-lg">
      <span className="text-white font-bold" categoryName="cbc">
        {props.name}
      </span>
      <input type="text" className="pl-8 py-2 rounded-lg"></input>
    </div>
  )
}

export const FormFieldDate = (props) => {
  return (
    <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-1/2 m:w-2/3 w-4/5  m-auto items-center text-lg">
      <span className="text-white font-bold" categoryName="cbc">
        {props.name}
      </span>
      <input type="date" className="pl-8 py-2 rounded-lg"></input>
    </div>
  )
}
