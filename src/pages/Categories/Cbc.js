import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'


const Cbc = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [hemoglobin, setHemoglobin] = useState('')
  const [packedCellVolume, setPackedCellVolume] = useState('')
  const [rbc, setRBC] = useState('')
  const [mcv, setMCV] = useState('')
  const [mch, setMCH] = useState('')
  const [mchc, setMCHC] = useState('')
  const [redCellDistributionWidth, setRedCellDistributionWidth] = useState('')
  const [totalLeukocyteCount, setTotalLeukocyteCount] = useState('')
  const [plateletCount, setPlateletCount] = useState('')

  const addRecordToFirestore = async () => {
    try {
      const bloodTestRecord = {
        Hemoglobin: hemoglobin,
        PackedCellVolume: packedCellVolume,
        RBC: rbc,
        MCV: mcv,
        MCH: mch,
        MCHC: mchc,
        RedCellDistributionWidth: redCellDistributionWidth,
        TotalLeukocyteCount: totalLeukocyteCount,
        PlateletCount: plateletCount,
      }

      await setDoc(doc(db, 'arsh_ali', 'records'), {
        name: 'Arsh Ali',
        email: 'arsh@gmail.com',
        height: '180cm',
        bloodTest: [bloodTestRecord],
      })
      console.log('Document successfully written!')
    } catch (error) {
      console.log('Error writing document: ', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted data:', {
      Date: date,
      Time: time,
      Hemoglobin: hemoglobin,
      PackedCellVolume: packedCellVolume,
      RBC: rbc,
      MCV: mcv,
      MCH: mch,
      MCHC: mchc,
      RedCellDistributionWidth: redCellDistributionWidth,
      TotalLeukocyteCount: totalLeukocyteCount,
      PlateletCount: plateletCount,
    })
    addRecordToFirestore()
  }

  return (
    <div className="flex flex-col items-center w-full md:w-2/3 mx-auto">
      <h1 className="text-center text-5xl py-10">CBC</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <form onSubmit={handleSubmit}>
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Date</span>
          <input
            type="date"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Time</span>
          <input
            type="time"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Hemoglobin</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setHemoglobin(e.target.value)}
            value={hemoglobin}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Packed Cell Volume</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setPackedCellVolume(e.target.value)}
            value={packedCellVolume}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">RBC</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setRBC(e.target.value)}
            value={rbc}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">MCV</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setMCV(e.target.value)}
            value={mcv}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">MCH</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setMCH(e.target.value)}
            value={mch}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">MCHC</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setMCHC(e.target.value)}
            value={mchc}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">
            Red Cell Distribution Width
          </span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setRedCellDistributionWidth(e.target.value)}
            value={redCellDistributionWidth}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Total Leukocyte Count</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setTotalLeukocyteCount(e.target.value)}
            value={totalLeukocyteCount}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Platelet Count</span>
          <input
            type="number"
            step="0.01"
            className="pl-8 py-2 rounded-lg"
            onChange={(e) => setPlateletCount(e.target.value)}
            value={plateletCount}
          ></input>
        </div>

        <button
          className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold"
          onClick={handleSubmit}
        >
          Save Records
        </button>
      </form>

      {/* Displaying the submitted data */}
      <div>
        <h2>Submitted Record:</h2>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Hemoglobin: {hemoglobin}</p>
        <p>Packed Cell Volume: {packedCellVolume}</p>
        <p>RBC: {rbc}</p>
        <p>MCV: {mcv}</p>
        <p>MCH: {mch}</p>
        <p>MCHC: {mchc}</p>
        <p>Red Cell Distribution Width: {redCellDistributionWidth}</p>
        <p>Total Leukocyte Count: {totalLeukocyteCount}</p>
        <p>Platelet Count: {plateletCount}</p>
      </div>
    </div>
  )
}

export default Cbc
