"use client";
import { useRouter } from "next/navigation";
import NavButton from "./NavButton";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FigmaIcon, FileText, Home } from "lucide-react";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 px-20 py-4 flex gap-2 justify-between left-0 bg-white w-full h-20 z-50">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="hover:cursor-pointer flex flex-row gap-2 items-center justify-center"
      >
        <Image
          className="w-8 h-auto object-contain -mt-2"
          src={Logo}
          alt={"Roominate Logo"}
        />
        <p className="text-[#2B2231] font-semibold">Roominate</p>
      </button>
      <div className="flex flex-row gap-4 items-center">
        <NavButton
          onClick={() => {
            router.push("/process");
          }}
          text={
            <>
              <FileText size={15} className="-mt-0.5" />
              <p>Process</p>
            </>
          }
        />
        <NavButton
          onClick={() => {
            router.push("/prototype");
          }}
          text={
            <>
              <FigmaIcon size={15} className="-mt-0.5" />
              <p>Prototype</p>
            </>
          }
        />
      </div>
    </div>
  );
}
