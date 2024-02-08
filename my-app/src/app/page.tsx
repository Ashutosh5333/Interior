import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className="bg-[#FFFFFF]">
            <Navbar/>
            <Homepage/>
            {/* <Homepage/> */}
    </main>
  );
}
