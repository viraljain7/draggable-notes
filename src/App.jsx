import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="relative w-full h-screen  bg-zinc-700">
      <Navbar />

      <Background />
      <Foreground />
    </div>
  )
}