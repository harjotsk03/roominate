"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import NavButton from "./NavButton";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { CircleUserRound, FigmaIcon, FileText, Menu, X } from "lucide-react";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navigate = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b lg:border-none">
      <div className="h-20 px-6 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex hover:cursor-pointer items-center gap-2"
        >
          <Image
            src={Logo}
            alt="Roominate Logo"
            className="w-8 h-auto object-contain -mt-1"
          />
          <p className="text-[#2B2231] font-semibold text-bse">Roominate</p>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          <NavButton
            onClick={() => navigate("/process")}
            text={
              <>
                <FileText size={15} className="-mt-0.5" />
                <p className={isActive("/process") ? "text-black" : ""}>
                  Process
                </p>
              </>
            }
          />
          <NavButton
            onClick={() => navigate("/team")}
            text={
              <>
                <CircleUserRound size={15} className="-mt-0.5" />
                <p className={isActive("/team") ? "text-black" : ""}>Team</p>
              </>
            }
          />
          <NavButton
            onClick={() => navigate("/prototype")}
            text={
              <>
                <FigmaIcon size={15} className="-mt-0.5" />
                <p className={isActive("/prototype") ? "text-black" : ""}>
                  Prototype
                </p>
              </>
            }
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <button
            onClick={() => navigate("/process")}
            className={`w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-100 ${
              isActive("/process") ? "text-black font-semibold" : ""
            }`}
          >
            <FileText size={18} />
            <span>Process</span>
          </button>
          <button
            onClick={() => navigate("/prototype")}
            className={`w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-100 ${
              isActive("/prototype") ? "text-black font-semibold" : ""
            }`}
          >
            <FigmaIcon size={18} />
            <span>Prototype</span>
          </button>
        </div>
      )}
    </nav>
  );
}
