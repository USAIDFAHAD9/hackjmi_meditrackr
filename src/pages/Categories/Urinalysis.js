import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "@firebase/firestore";

const Urinalysis = () => {
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [formConsistency, setFormConsistency] = useState("");
  const [mucus, setMucus] = useState("");
  const [visibleBlood, setVisibleBlood] = useState("");
  const [reaction, setReaction] = useState("");
  const [pusCells, setPusCells] = useState("");
  const [rbc, setRbc] = useState("");
  const [macrophages, setMacrophages] = useState("");
  const [trophozoites, setTrophozoites] = useState("");
  const [cysts, setCysts] = useState("");
  const [helminthicOva, setHelminthicOva] = useState("");
  const [larva, setLarva] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const urinalysisRecord = {
        Date: date,
        Color: color,
        "Form / Consistency": formConsistency,
        Mucus: mucus,
        "Visible Blood": visibleBlood,
        Reaction: reaction,
        "Pus Cells (/hpf)": pusCells,
        "RBC (/hpf)": rbc,
        Macrophages: macrophages,
        Trophozoites: trophozoites,
        Cysts: cysts,
        "Helminthic Ova": helminthicOva,
        Larva: larva,
      };

      const docRef = doc(db, "arsh_ali", "records");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingData = docSnap.data();

        const newData = {
          ...existingData,
          name: "Arsh Ali",
          email: "arsh@gmail.com",
          height: "180cm",
          urinalysis: existingData.urinalysis ? [...existingData.urinalysis, urinalysisRecord] : [urinalysisRecord],
        };

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
      <h1 className="text-center text-5xl py-10">Urinalysis</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Date</span>
          <input type="date" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Color</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Form / Consistency</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={formConsistency} onChange={(e) => setFormConsistency(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Mucus</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={mucus} onChange={(e) => setMucus(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Visible Blood</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={visibleBlood} onChange={(e) => setVisibleBlood(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Reaction</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={reaction} onChange={(e) => setReaction(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Pus Cells (/hpf)</span>
          <input type="number" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={pusCells} onChange={(e) => setPusCells(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">RBC (/hpf)</span>
          <input type="number" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={rbc} onChange={(e) => setRbc(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Macrophages</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={macrophages} onChange={(e) => setMacrophages(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Trophozoites</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={trophozoites} onChange={(e) => setTrophozoites(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Cysts</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={cysts} onChange={(e) => setCysts(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Helminthic Ova</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={helminthicOva} onChange={(e) => setHelminthicOva(e.target.value)} />
        </div>

        <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
          <span className="text-white font-bold">Larva</span>
          <input type="text" className=" py-2 rounded-lg w-3/4 sm:w-1/3 text-center" value={larva} onChange={(e) => setLarva(e.target.value)} />
        </div>

        <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold" type="submit">
          Save Records
        </button>
      </form>
    </div>
  );
};

export default Urinalysis;
