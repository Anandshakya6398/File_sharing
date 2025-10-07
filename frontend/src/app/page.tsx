import Navbar from "@/components/Navbar";
import { Share } from "next/font/google";
import Image from "next/image";
import FileSharePage from "./share/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<>
<Navbar/>
<FileSharePage/>
<Footer/>
</>
  );
}
