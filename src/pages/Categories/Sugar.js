import React, { useState } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import jsPDF from "jspdf";
import { auth } from "../../firebase/firebase";

const Sugar = () => {
  const [date, setDate] = useState("");
  const [fastingBloodGlucose, setFastingBloodGlucose] = useState("");
  const [randomBloodGlucose, setRandomBloodGlucose] = useState("");
  const pdf = new jsPDF();
  const generatePDF = () => {
    let name = auth.currentUser.displayName;

    pdf.autoTable({
      theme: "grid",
      body: [[date, fastingBloodGlucose, randomBloodGlucose]],
      columns: [
        { header: "Date" },
        { header: "Fasting Blood Glucose" },
        { header: "Random Blood Glucose" },
      ],
      styles: {
        fontSize: 7,
      },
    });

    pdf.save(`${name}_blood_glucose_test.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sugarRecord = {
        Date: date,
        "Fasting Blood Glucose": fastingBloodGlucose,
        "Random Blood Glucose": randomBloodGlucose,
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
            sugar: existingData.sugar
              ? [...existingData.sugar, sugarRecord]
              : [sugarRecord], // Concatenate kft records
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
      <h1 className="text-center text-5xl py-10">Sugar Test</h1>
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
          <span className="text-white font-bold">Fasting Blood Glucose</span>
          <input
            type="number"
            step="0.01"
            className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
            onChange={(e) => setFastingBloodGlucose(e.target.value)}
            value={fastingBloodGlucose}
          ></input>
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Random Blood Glucose</span>
          <input
            type="number"
            step="0.01"
            className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
            onChange={(e) => setRandomBloodGlucose(e.target.value)}
            value={randomBloodGlucose}
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

export default Sugar;
