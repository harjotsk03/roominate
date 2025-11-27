"use client";
import { ArrowRight, ArrowUpRight, FigmaIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GoToProtypeButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (pathname.includes("/prototype")) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [pathname]);

  return (
    <>
      {showButton && (
        <button
          className="fixed font-medium hover:cursor-pointer flex flex-row gap-2 group items-center text-white px-6 py-2.5 hover:scale-95 transition-all ease-in-out duration-500 bottom-4 right-4 z-50 rounded-lg bg-black"
          onClick={() => {
            router.push("/prototype");
          }}
        >
          <FigmaIcon
            size={16}
            className=""
          />
          View Interactive Prototype{" "}
        </button>
      )}
    </>
  );
}
