import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-neutral">
      <header className="pt-6 pb-0.5 w-full shadow-xl bg-accent -mt-8">
        <Navbar />
      </header>

      <div className="flex flex-row gap-8 justify-center py-32 w-fit mx-auto animate-fade-in bg-">
        <div className="flex flex-col gap-4 min-w-[160px] shrink-0">
          <Image
            src="/amusement.jpg"
            alt="Amusement park rides"
            width={250}
            height={150}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
          <Image
            src="/gokarts.jpg"
            alt="Go kart racing"
            width={250}
            height={150}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
        </div>

        <div className="text-8xl text-wrap font-semibold mx-8 shrink-0 flex flex-col gap-4 drop-shadow-2xl">
          <span className="bg-linear-to-br from-primary to-secondary text-white border-r-primary border-b-primary border-t-secondary border-l-secondary border-4 rounded-2xl px-5 shadow-xl hover:scale-110 transition-transform duration-200 font-mono">
            Affordable
          </span>
          <span>Road Trips</span>
          <span>For Students</span>
        </div>

        <div className="flex flex-col gap-4 min-w-[160px] shrink-0">
          <Image
            src="/arcade.jpg"
            alt="Arcade games"
            width={250}
            height={150}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
          <Image
            src="/horse.jpg"
            alt="Horse riding"
            width={250}
            height={150}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
        </div>
      </div>
      <div className="relative w-full min-h-[600px] px-8 text-2xl">
        <div className="absolute left-[15%] -rotate-2 bg-accent rounded-xl p-8 mb-8 shadow-lg hover:shadow-xl hover:-rotate-1 transition-all max-w-2xl z-10 border-4 border-primary">
          <p>
            Traveling as a college student is tough due to financial and time constraints. Over 1 in 10 college students want to travel. But there is an overlying struggle of expensive vacation options like studying abroad.
          </p>
        </div>

        <div className="absolute right-[10%] top-[160px] rotate-1 bg-accent rounded-xl p-8 mb-8 shadow-lg hover:shadow-xl hover:rotate-2 transition-all max-w-2xl z-20 border-4 border-primary">
          <p>
            Harris Tours offers an affordable, fun, and flexible solution. Specializing in bus tours for college students, Harris Tours prioritizes activities and experiences over sightseeing.
          </p>
        </div>

        <div className="absolute left-[25%] top-[320px] -rotate-1 bg-accent rounded-xl p-8 shadow-lg hover:shadow-xl hover:rotate-1 transition-all max-w-2xl z-30 border-4 border-primary">
          <p>
            With tours running on weekends, we cater perfectly to the busy college schedule. Unlike other companies, we focus on giving students hands-on adventures, providing a unique and exciting way to travel without the stress of planning or excessive costs.
          </p>
        </div>
      </div>

      <footer className="bg-neutral p-8 drop-shadow-2xl border-t-4">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-16">
          <div>
            <h3 className="font-semibold text-xl mb-4">Tours</h3>
            <div className="flex flex-col gap-2">
              <a href="/tours/weekend" className="text-gray-600 hover:text-gray-900 transition-colors">Weekend Trips</a>
              <a href="/tours/spring-break" className="text-gray-600 hover:text-gray-900 transition-colors">Spring Break</a>
              <a href="/tours/summer" className="text-gray-600 hover:text-gray-900 transition-colors">Summer Tours</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">About</h3>
            <div className="flex flex-col gap-2">
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">Our Story</a>
              <a href="/about/team" className="text-gray-600 hover:text-gray-900 transition-colors">Team</a>
              <a href="/about/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Policies</h3>
            <div className="flex flex-col gap-2">
              <a href="/policies/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
              <a href="/policies/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="/policies/refunds" className="text-gray-600 hover:text-gray-900 transition-colors">Refunds</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">More</h3>
            <div className="flex flex-col gap-2">
              <a href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
              <a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors">Partners</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© 2025 Harris Tours. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}