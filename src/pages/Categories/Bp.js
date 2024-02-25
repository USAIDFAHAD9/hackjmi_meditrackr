import React, { useState } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase"; // Assuming you have your Firebase configuration set up

const Bp = () => {
  const [date, setDate] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [diastolicBP, setDiastolicBP] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bpRecord = {
        Date: date,
        "Systolic Blood Pressure (Upper BP) (mmHg)": systolicBP,
        "Diastolic Blood Pressure (Lower BP) (mmHg)": diastolicBP,
      };

      const docRef = doc(db, "arsh_ali", "records");

      try {
        // Fetch the existing document data
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const existingData = docSnap.data();

          // Merge the existing data with the new data
          const newData = {
            ...existingData,
            name: "Arsh Ali", //user's name from profile
            email: "arsh@gmail.com", // user email
            height: "180cm", // user height
            bp: existingData.bp ? [...existingData.bp, bpRecord] : [bpRecord], // Concatenate kft records
          };

          // Update the document with the merged data
          await setDoc(docRef, newData);
          console.log("Document successfully updated!");
        } else {
          console.log("Document does not exist!");
        }
      } catch (error) {
        console.error("Error updating document: ", error);
      }
      console.log("Document successfully written!");
    } catch (error) {
      console.log("Error writing document: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full md:w-2/3 mx-auto">
      <h1 className="text-center text-5xl py-10">Blood Pressure</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Date</span>
          <input type="date" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setDate(e.target.value)} value={date}></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Systolic Blood Pressure (Upper BP) (mmHg)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setSystolicBP(e.target.value)} value={systolicBP}></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Diastolic Blood Pressure (Lower BP) (mmHg)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setDiastolicBP(e.target.value)} value={diastolicBP}></input>
        </div>

        <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold" type="submit">
          Save Records
        </button>
      </form>
    </div>
  );
};

export default Bp;
