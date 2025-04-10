"use client";

import SliderToggle from "./SliderToggle";
import { useState } from "react";

const Example = () => {
    const [selected, setSelected] = useState("light");
    return (
    <div
        className={`grid h-[200px] place-content-center px-4 transition-colors ${
        selected === "light" ? "bg-white" : "bg-slate-900"
        }`}
    >
        <Navbar selected={selected} setSelected={setSelected} />
    </div>
    );
};

const Navbar = ({ 
    selected, 
    setSelected 
}: { 
    selected: string;
    setSelected: (value: string) => void;
}) => {
    return (
        <header className="">
            <div className="flex flex-row justify-between items-center m-8">
            <button className="flex flex-col justify-center items-center gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <div className="w-6 h-0.5 bg-current hover:grow"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
            </button>
            <div className="text-4xl uppercase font-semibold">Harris Tours</div>
            <div className="flex flex-row gap-10 font-mono">
                <div>Tours</div>
                <div>About</div>
                <div>Policies</div>
                <div>More</div>
            </div>
            <SliderToggle selected={selected} setSelected={setSelected}/>
            <div className="flex flex-row gap-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            </div>
        </header>
    )
}

export default Navbar;