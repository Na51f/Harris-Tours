import NavbarDropdown from "./NavbarDropdown";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center m-8">
      <div className="flex flex-row gap-4">
        <button className="flex flex-col justify-center items-center gap-1.5 p-2 
          hover:bg-gray-100 rounded-lg transition-colors">
          <div className="w-6 h-0.5 bg-current"></div>
          <div className="w-6 h-0.5 bg-current"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>
      <Image
          src="/logo.png"
          alt="Harris Tours Logo" 
          width={200}
          height={200}
          className="rounded-lg"
        />
      <div className="flex flex-row gap-16 font-mono text-xl">
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
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
    </div>
  );
}