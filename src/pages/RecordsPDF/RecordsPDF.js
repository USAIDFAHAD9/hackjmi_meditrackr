import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const RecordsPDF = () => {
  const doc = new jsPDF();
  const generatePDF = () => {
    let name = "Vidip Ghosh";
    let age = "21";
    let height = "178cm";
    let weight = "75kg";
    let bloodGroup = "B+";
    doc.text(
      "Name:" +
        name +
        " | Age:" +
        age +
        " | Weight:" +
        weight +
        " | Blood Group:" +
        bloodGroup,
      10,
      10
    );
    doc.save(`${name}.pdf`);
  };

  const bloodTestGeneratePDF = () => {
    let name = "Vidip Ghosh";
    doc.autoTable({
      theme: "grid",

      body: [
        [
          "12-09-2023",
          "15.5 g/dl",
          "35.5%",
          "4.35 millions",
          "85 femtoliters",
          "150k",
          "7000nm",
        ],
        [
          "11-12-2023",
          "15.5 g/dl",
          "35.5%",
          "4.55 millions",
          "75 femtoliters",
          "150k",
          "6000nm",
        ],
      ],
      columns: [
        { header: "Date" },
        { header: "Haemoglobin" },
        { header: "Packed Cell Vol" },
        { header: "RBC CNT" },
        { header: "MCV" },
        { header: "Platelete count" },
        { header: "Leukocyte count" },
      ],
      styles: {
        fontSize: 10,
      },
    });
    doc.save(`${name}_blood_test.pdf`);
  };

  const urineAnalysisPDF = () => {
    let name = "Vidip Ghosh";
    doc.autoTable({
      theme: "grid",

      body: [
        [
          "11-12-2023",
          "dark yellow",
          "1.005",
          "4.5",
          "120 mg/dL",
          "NA",
          "17 umol/L",
          "present",
          "present",
          "not detected",
          "none detected",
          "none detected",
          "NA",
          "NA",
        ],
      ],
      columns: [
        { header: "Date" },
        { header: "color" },
        { header: "sp-gravity" },
        { header: "ph" },
        { header: "Protiens" },
        { header: "Bilirubin" },
        { header: "Urobilinogen" },
        { header: "Esterase" },
        { header: "Nitrite" },
        { header: "RBC" },
        { header: "Pus Cells" },
        { header: "Epitheleal Cells" },
        { header: "Casts" },
        { header: "Crystal" },
      ],
      styles: {
        fontSize: 7,
      },
    });
    doc.save(`${name}_urinalysis.pdf`);
  };
  const stoolTest = () => {
    let name = "Vidip Ghosh";
    doc.autoTable({
      theme: "grid",

      body: [
        [
          "11-12-2023",
          "brown, soft, formed",
          "none",
          "none",
          "acidic",
          "none",
          "none detected",
          "none detected",
          "none detected",
          "none detected",
          "none detected",
          "none detected",
          "none detected",
          "none detected",
        ],
      ],
      columns: [
        { header: "Date" },
        { header: "Color.Form and Consistency" },
        { header: "Mucus" },
        { header: "Visible Blood" },
        { header: "Reaction" },
        { header: "Charcot-Leyden Crystals" },
        { header: "Pus Cells" },
        { header: "RBC" },
        { header: "Macrophages" },
        { header: "Trophozoites" },
        { header: "Cysts" },
        { header: "Helminthic Ova" },
        { header: "Larva" },
      ],
      styles: {
        fontSize: 6,
      },
    });
    doc.save(`${name}_stool_test.pdf`);
  };

  const kft = () => {
    let name = "Vidip Ghosh";
    doc.autoTable({
      theme: "grid",

      body: [
        [
          "11-12-2023",
          "1.2 mg/dL",
          "90 mL/min",
          "Normal",
          "15 mg/dL",
          "13.5 mg/dL",
          "15",
          "4.2 mg/dL",
          "7.4 g/dL",
          "4.25 g/dL",
          "2.0",
          "2.7 g/dL",
          "9.5 mg/dL",
        ],
      ],
      columns: [
        { header: "Date" },
        { header: "Creatinine" },
        { header: "GFR Estimated" },
        { header: "GFR Category" },
        { header: "Urea" },
        { header: "Urea Nitrogen Blood" },
        { header: "BUN/Creatinine Ratio" },
        { header: "Uric Acid" },
        { header: "Total Protein" },
        { header: "Albumin" },
        { header: "A : G Ratio" },
        { header: "Globulin" },
        { header: "Calcium" },
      ],
      styles: {
        fontSize: 7,
      },
    });
    doc.save(`${name}_kft_test.pdf`);
  };

  const lft = () => {
    let name = "Vidip Ghosh";
    doc.autoTable({
      theme: "grid",

      body: [
        [
          "11-12-2023",
          "30 IU/L",
          "25 IU/L",
          "1.2",
          "10 IU/L",
          "80 IU/L",
          "0.7 mg/dL",
          "0.2 mg/dL",
          "0.5 mg/dL",
          "7.0 g/dL",
          "4.0 g/dL",
          "1.75",
        ],
      ],
      columns: [
        { header: "Date" },
        { header: "AST (SGOT)" },
        { header: "ALT (SGPT)" },
        { header: "AST:ALT Ratio" },
        { header: "GGTP" },
        { header: "Alkaline Phosphate (ALP)" },
        { header: "Bilirubin Total" },
        { header: "Bilirubin Direct" },
        { header: "Bilirubin Indirect" },
        { header: "Total Protein" },
        { header: "Albumin" },
        { header: "A : G Ratio" },
      ],
      styles: {
        fontSize: 7,
      },
    });
    doc.save(`${name}_lipid_lft_test.pdf`);
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={kft}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default RecordsPDF;
