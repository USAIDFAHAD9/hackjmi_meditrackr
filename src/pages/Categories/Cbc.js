import React from "react";
import { useState } from "react";
import { FormFieldNumber } from "../../components/FormFields";
// import { FormFieldText } from "../../components/FormFields"
import { FormFieldDate } from "./../../components/FormFields";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const Cbc = () => {
  const [newRecord, setNewRecord] = useState({
    Date: "",
    Hemoglobin: "",
    PackedCellVolume: "",
    RBC: "",
    MCV: "",
    MCH: "",
    MCHC: "",
    RedCellDistributionWidth: "",
    TotalLeukocyteCount: "",
    PlateletCount: "",
  });
  const addRecordToFirestore = async () => {
    try {
      const bloodTestRecord = {
        Haemoglobin: newRecord.Hemoglobin,
        PackedCellVolume: newRecord.PackedCellVolume,
        RBC: newRecord.RBC,
        MCV: newRecord.MCV,
        MCH: newRecord.MCH,
        MCHC: newRecord.MCHC,
        RedCellDistributionWidth: newRecord.RedCellDistributionWidth,
        TotalLeukocyteCount: newRecord.TotalLeukocyteCount,
        PlateletCount: newRecord.PlateletCount,
      };
      const kftRecord = {
        Urea: "20",
        Creatinine: "1.5",
        UricAcid: "7.5",
      };
      await setDoc(doc(db, "arsh_ali", "records"), {
        name: "Arsh Ali",
        email: "arsh@gmail.com",
        height: "180cm",
        bloodTest: [bloodTestRecord],
        kft: [kftRecord],
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.log("Error writing document: ", error);
    }
  };

  addRecordToFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center w-full md:w-2/3  mx-auto">
      <h1 className="text-center text-5xl py-10">CBC</h1>
      <div className="border-t border-gray-400 my-4 mb-8 w-full"></div>
      <form onclick={handleSubmit}>
        <FormFieldDate name="Date" />

        <FormFieldNumber name="Hemoglobin (g/dL)" />
        <FormFieldNumber name="Packed Cell Volume (%)" />
        <FormFieldNumber name="RBC Count (mill/mm³)" />
        <FormFieldNumber name="MCV (fL)" />
        <FormFieldNumber name="MCH (pg)" />
        <FormFieldNumber name="MCHC (g/dL)" />
        <FormFieldNumber name="Red Cell Distrbution Width (%)" />
        <FormFieldNumber name="Total Leukocyte Count (thou/mm³)" />
        <FormFieldNumber name="Platelet Count (thou/mm³)" />

        <button className="py-5 bg-green-500 hover:bg-green-600 rounded-lg my-8 px-5 text-white font-extrabold">
          Save Records
        </button>
      </form>
    </div>
  );
};

export default Cbc;
