import NavbarDropdown from "./NavbarDropdown";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center m-8">
      <div className="flex flex-row gap-4">
        <button className="flex flex-col justify-center items-center gap-1.5 p-2 
          hover:shadow-md hover:text-white hover:bg-secondary hover:scale-110 rounded-lg transition-all duration-300 w-10 h-10">
          <div className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:w-8"></div>
          <div className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:w-8"></div>
          <div className="w-6 h-0.5 bg-current transition-all duration-300 group-hover:w-8"></div>
        </button>
      </div>
      <div className="relative w-[200px] h-[100px]">
        <Image
          src="/logo.png"
          alt="Harris Tours Logo" 
          width={200}
          height={200}
          className="rounded-lg absolute transition-transform hover:scale-110"
        />
      </div>
      <div className="flex flex-row gap-16 font-mono text-xl drop-shadow-xsz drop-shadow-secondary">
        <NavbarDropdown
          label="Tours"
          items={[
            { name: "Weekend Trips", path: "/tours/weekend" },
            { name: "Spring Break", path: "/tours/spring-break" },
            { name: "Summer Tours", path: "/tours/summer" }
          ]}
        />
        <NavbarDropdown
          label="About"
          items={[
            { name: "Our Story", path: "/about" },
            { name: "Team", path: "/about/team" },
            { name: "Contact", path: "/about/contact" }
          ]}
        />
        <NavbarDropdown
          label="Policies"
          items={[
            { name: "Terms", path: "/policies/terms" },
            { name: "Privacy", path: "/policies/privacy" },
            { name: "Refunds", path: "/policies/refunds" }
          ]}
        />
        <NavbarDropdown
          label="More"
          items={[
            { name: "FAQ", path: "/faq" },
            { name: "Blog", path: "/blog" },
            { name: "Partners", path: "/partners" }
          ]}
        />
      </div>
      <div className="flex flex-row gap-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="hover:scale-110 transition-transform">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="hover:scale-110 transition-transform">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    </div>
  );
}