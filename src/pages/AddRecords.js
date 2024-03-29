import React from 'react'
import Cbc from './Categories/Cbc'
import { Link } from 'react-router-dom'
import RecordsPDF from './RecordsPDF/RecordsPDF'

const AddRecords = () => {
  return (
    <div className="w-full md:w-2/3  m-auto mb-32 flex flex-col text-center h-auto ">
      <h1 className=" text-lg md:text-5xl p-10 font-bold ">
        Select Test Category to Add your Records
      </h1>
      <div className="border-t border-gray-400 my-4 mb-8"></div>

      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/bp">Blood Pressure</Link>
      </div>
      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/cbc">CBC</Link>
      </div>

      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/kft">Kidney Function Test (KFT) </Link>
      </div>

      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/lft">Liver Function Test (LFT)</Link>
      </div>

      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/sugar">Blood Glucose</Link>
      </div>

      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/thyroid">Thyroid</Link>
      </div>

      <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-1/6 mid:w-3/6 m-auto text-lg text-white font-bold text-center">
        <Link to="/urinalysis"> Urinalysis</Link>
      </div>
      <div className="pt-10"></div>
    </div>
  )
}

export default AddRecords
