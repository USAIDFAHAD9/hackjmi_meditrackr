import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase"; // Assuming you have your Firebase configuration set up
import { getDoc } from "firebase/firestore";

const Lft = () => {
  const [date, setDate] = useState("");
  const [astSgot, setAstSgot] = useState("");
  const [altSgpt, setAltSgpt] = useState("");
  const [astAltRatio, setAstAltRatio] = useState("");
  const [ggtp, setGgtp] = useState("");
  const [alkalinePhosphate, setAlkalinePhosphate] = useState("");
  const [bilirubinTotal, setBilirubinTotal] = useState("");
  const [bilirubinDirect, setBilirubinDirect] = useState("");
  const [bilirubinIndirect, setBilirubinIndirect] = useState("");
  const [totalProtein, setTotalProtein] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [agRatio, setAgRatio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const lftRecord = {
        Date: date,
        "AST(SGOT) (U/L)": astSgot,
        "ALT(SGPT) (U/L)": altSgpt,
        "AST:ALT Ratio": astAltRatio,
        "GGTP (U/L)": ggtp,
        "Alkaline Phosphate (U/L)": alkalinePhosphate,
        "Bilirubin Total (mg/dL)": bilirubinTotal,
        "Bilirubin Direct (mg/dL)": bilirubinDirect,
        "Bilirubin Indirect (mg/dL)": bilirubinIndirect,
        "Total Protein (g/dL)": totalProtein,
        "Albumin (g/dL)": albumin,
        "A:G Ratio": agRatio,
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
            lft: existingData.lft ? [...existingData.lft, lftRecord] : [lftRecord], // Concatenate kft records
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
      <h1 className="text-center text-5xl py-10">LFT</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Date</span>
          <input type="date" required className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setDate(e.target.value)} value={date} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">AST(SGOT) (U/L)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setAstSgot(e.target.value)} value={astSgot} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">ALT(SGPT) (U/L)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setAltSgpt(e.target.value)} value={altSgpt} />
        </div>

        {/* Add similar divs for other form fields */}
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">AST:ALT Ratio</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setAstAltRatio(e.target.value)} value={astAltRatio} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">GGTP (U/L)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setGgtp(e.target.value)} value={ggtp} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Alkaline Phosphate (U/L)</span>
          <input type="number" step="0.01" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" onChange={(e) => setAlkalinePhosphate(e.target.value)} value={alkalinePhosphate} />
        </div>

        {/* Continue adding similar divs for other form fields */}

        <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold" type="submit">
          Save Records
        </button>
      </form>
    </div>
  );
};

export default Lft;
