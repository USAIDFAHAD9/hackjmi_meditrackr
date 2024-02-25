import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddRecords from "./pages/AddRecords";
import Cbc from "./pages/Categories/Cbc";
import RecordsPDF from "./pages/RecordsPDF/RecordsPDF";

import Cbc from "./pages/Categories/Cbc";
import Sugar from "./pages/Categories/Sugar";
import Kft from "./pages/Categories/Kft";
import Lft from "./pages/Categories/Lft";
import Bp from "./pages/Categories/Bp";
import Thyroid from "./pages/Categories/Thyroid";
import Urinalysis from "./pages/Categories/Urinalysis";

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addrecords" element={<AddRecords />} />
          <Route path="/cbc" element={<Cbc />} />
          <Route path="/records" element={<RecordsPDF />} />

          <Route path="/bp" element={<Bp />} />
          <Route path="/cbc" element={<Cbc />} />
          <Route path="/kft" element={<Kft />} />
          <Route path="/lft" element={<Lft />} />
          <Route path="/sugar" element={<Sugar />} />
          <Route path="/thyroid" element={<Thyroid />} />
          <Route path="/urinalysis" element={<Urinalysis />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
