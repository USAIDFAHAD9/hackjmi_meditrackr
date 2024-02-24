import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="text-center">
        <div>I wanna the very best</div>
        <div>Like no one ever was</div>
        <div>To catch them is my real test</div>
        <div>To train them is my cause</div>
      </div>
      <Footer />
    </div>
  )
}
