"use client";

import Image from "next/image";
import { useState } from "react";

// Components
import Navbar from "./components/Navbar";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <main className={`${theme === "light" ? "bg-white" : "bg-slate-900"}`}>
      <Navbar selected={theme} setSelected={setTheme}/>
    </main>
  );
}
