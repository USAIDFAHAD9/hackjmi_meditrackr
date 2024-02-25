import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogIn from "./pages/Login";
import SignUp from "./pages/Signup";
import AddRecords from "./pages/AddRecords";
import Cbc from "./pages/Categories/Cbc";

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
