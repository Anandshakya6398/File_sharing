import Navbar from "@/components/Navbar";
import { Share } from "next/font/google";
import Image from "next/image";
import FileSharePage from "./share/page";
import Footer from "@/components/Footer";
import Why from "@/components/why";
import How from "@/components/How";
import Frequently from "@/components/Frequently";
// import Why from "@/components/why";


export default function Home() {
  return (
<>
      <Navbar />
      <FileSharePage />
      <Why />
      <How/>
      <Frequently/>
      <Footer />
    </>
  );
}

