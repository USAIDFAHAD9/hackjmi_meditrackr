import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase"; // Import your Firestore database configuration
import { getDoc } from "firebase/firestore";
const Kft = () => {
  const [date, setDate] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [gfrEstimated, setGfrEstimated] = useState("");
  const [urea, setUrea] = useState("");
  const [ureaNitrogenBlood, setUreaNitrogenBlood] = useState("");
  const [uricAcid, setUricAcid] = useState("");
  const [totalProtein, setTotalProtein] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [globulin, setGlobulin] = useState("");
  const [calcium, setCalcium] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [sodium, setSodium] = useState("");
  const [potassium, setPotassium] = useState("");
  const [chloride, setChloride] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const kftRecord = {
        Date: date,
        Creatinine: creatinine,
        "GFR Estimated": gfrEstimated,
        Urea: urea,
        "Urea Nitrogen Blood": ureaNitrogenBlood,
        "Uric Acid": uricAcid,
        "Total Protein": totalProtein,
        Albumin: albumin,
        Globulin: globulin,
        Calcium: calcium,
        Phosphorus: phosphorus,
        Sodium: sodium,
        Potassium: potassium,
        Chloride: chloride,
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
            kft: existingData.kft ? [...existingData.kft, kftRecord] : [kftRecord], // Concatenate kft records
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
      <h1 className="text-center text-5xl py-10">KFT</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* Date */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Date</span>
          <input type="date" required className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setDate(e.target.value)} value={date} name="Date" />
        </div>

        {/* Creatinine */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Creatinine (mg/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setCreatinine(e.target.value)} value={creatinine} name="Creatinine (mg/dL)" />
        </div>

        {/* GFR Estimated */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">GFR Estimated (mL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setGfrEstimated(e.target.value)} value={gfrEstimated} name="GFR Estimated (mL)" />
        </div>

        {/* Urea */}
        {/* Repeat this block for each input field */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Urea (mg/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setUrea(e.target.value)} value={urea} name="Urea (mg/dL)" />
        </div>

        {/* Urea Nitrogen Blood */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Urea Nitrogen Blood (mg/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setUreaNitrogenBlood(e.target.value)} value={ureaNitrogenBlood} name="Urea Nitrogen Blood (mg/dL)" />
        </div>

        {/* Uric Acid */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Uric Acid (mg/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setUricAcid(e.target.value)} value={uricAcid} name="Uric Acid (mg/dL)" />
        </div>

        {/* Total Protein */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Total Protein (g/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setTotalProtein(e.target.value)} value={totalProtein} name="Total Protein (g/dL)" />
        </div>

        {/* Albumin */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Albumin (g/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setAlbumin(e.target.value)} value={albumin} name="Albumin (g/dL)" />
        </div>

        {/* Globulin */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Globulin (g/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setGlobulin(e.target.value)} value={globulin} name="Globulin (g/dL)" />
        </div>

        {/* Calcium */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Calcium (mg/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setCalcium(e.target.value)} value={calcium} name="Calcium (mg/dL)" />
        </div>

        {/* Phosphorus */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Phosphorus (mg/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setPhosphorus(e.target.value)} value={phosphorus} name="Phosphorus (mg/dL)" />
        </div>

        {/* Sodium */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Sodium (mEq/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setSodium(e.target.value)} value={sodium} name="Sodium (mEq/dL)" />
        </div>

        {/* Potassium */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Potassium (mEq/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setPotassium(e.target.value)} value={potassium} name="Potassium (mEq/dL)" />
        </div>

        {/* Chloride */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Chloride (mEq/dL)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setChloride(e.target.value)} value={chloride} name="Chloride (mEq/dL)" />
        </div>

        <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold" type="submit">
          Save Records
        </button>
      </form>
    </div>
  );
};

export default Kft;
