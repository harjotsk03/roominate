"use client";
import { useRouter } from "next/navigation";
import NavButton from "./NavButton";

export default function NavBar() {
    const router = useRouter();
    return <div className="fixed top-0 left-0 bg-purple-200 w-full h-20">
        <NavButton onClick={() => {router.push("/")}} text={"Home"}/>
        <NavButton onClick={() => {}} text={"Process"}/>
        <NavButton onClick={() => {router.push("/prototype");}} text={"Prototype"}/>
    </div>;
}