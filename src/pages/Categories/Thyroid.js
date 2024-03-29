import { getDoc, setDoc } from "@firebase/firestore";
import { db } from "../../firebase/firebase";
import { doc } from "@firebase/firestore";
import React, { useState } from "react";
import jsPdf from "jspdf";
import { auth } from "../../firebase/firebase";

const Thyroid = () => {
  const [date, setDate] = useState("");
  const [t3Total, setT3Total] = useState("");
  const [t4Total, setT4Total] = useState("");
  const [tsh, setTsh] = useState("");
  const pdf = new jsPdf();
  const generatePDF = () => {
    let name = auth.currentUser.displayName;

    pdf.autoTable({
      theme: "grid",
      body: [[date, t3Total, t4Total, tsh]],
      columns: [
        { header: "Date" },
        { header: "T3 Total" },
        { header: "T4 Total" },
        { header: "TSH" },
      ],
      styles: {
        fontSize: 7,
      },
    });

    pdf.save(`${name}_thyroid_test.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const thyroidRecord = {
        Date: date,
        "T3, Total (ng/mL)": t3Total,
        "T4, Total (μg/dL)": t4Total,
        "TSH (μlU/mL)": tsh,
      };

      const docRef = doc(db, "arsh_ali", "records");

      // Fetch the existing document data
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingData = docSnap.data();

        // Merge the existing data with the new thyroid record
        const newData = {
          ...existingData,
          name: "Arsh Ali", // user's name from profile
          email: "arsh@gmail.com", // user email
          height: "180cm", // user height
          thyroid: existingData.thyroid
            ? [...existingData.thyroid, thyroidRecord]
            : [thyroidRecord], // Concatenate thyroid records
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
  };

  return (
    <div className="flex flex-col items-center w-full md:w-2/3 mx-auto">
      <h1 className="text-center text-5xl py-10">Thyroid Test</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Date</span>
          <input
            type="date"
            required
            className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">T3, Total (ng/mL)</span>
          <input
            type="number"
            step="0.01"
            className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
            onChange={(e) => setT3Total(e.target.value)}
            value={t3Total}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">T4, Total (μg/dL)</span>
          <input
            type="number"
            step="0.01"
            className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
            onChange={(e) => setT4Total(e.target.value)}
            value={t4Total}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">TSH (μlU/mL)</span>
          <input
            type="number"
            step="0.01"
            className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
            onChange={(e) => setTsh(e.target.value)}
            value={tsh}
          ></input>
        </div>

        <button
          className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold"
          type="submit"
        >
          Save Records
        </button>
        <button
          onClick={generatePDF}
          // className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          className="bg-transparent hover:bg-green-500 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded "
        >
          Download PDF
        </button>
      </form>
    </div>
  );
};

export default Thyroid;
