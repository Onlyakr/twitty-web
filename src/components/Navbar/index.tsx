"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoIosMenu } from "react-icons/io";
import { LuTwitter } from "react-icons/lu";
import { usePathname, useRouter} from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [profilePop,setProfilePop] = useState(false);
  const [burgerPop,setBurgerPop] = useState(false);
  const router = useRouter();

  const activeNav1 =
    pathname === "/home" ? "text-[#3C3D37] border-b-2 border-[#3C3D37]" : "";
  const activeNav2 =
    pathname === "/profile" ? "text-[#3C3D37] border-b-2 border-[#3C3D37]" : "";

  const profile = {
    name: session?.user?.name,
    image: session?.user?.image,
  };

  const handleProfilePopup = () => {
    setProfilePop(!profilePop);
  };

  const burgerPopup = () => {
    setBurgerPop(!burgerPop);
  };

  useEffect(() => {
    burgerPop ? setProfilePop(profilePop) : setProfilePop(false);
  }, [burgerPop]);

  if (session) {
    return (
      <nav className="w-screen h-[10vh] px-12 py-4 text-[#171717] flex justify-center items-center">
        <div className="relative container max-h-[80px] mx-auto px-16 py-4 bg-white flex justify-between items-center rounded-full shadow-lg shadow-white z-50">
          <div className="flex items-center space-x-2">
            <Link href="/home" className="font-medium text-xl">
              <LuTwitter className="text-3xl" />
            </Link>
          </div>
          <ul className="hidden md:flex items-center space-x-10">
            <li className={`${activeNav1} active:scale-105 transition-all`}>
              <Link href="/home" className="font-medium text-xl">
                Home
              </Link>
            </li>
          </ul>
          <img
            src={profile.image}
            alt="profile-pic"
            className="hidden md:flex size-10 rounded-full transition-all z-50 hover:ring-4 hover:ring-[#171717]/70 hover:scale-95 active:scale-105"
            onClick={handleProfilePopup}
          />
          <div className={profilePop ? "max-md:hidden absolute top-8 right-0 w-[170px] pt-12 pb-5 flex flex-col items-center space-y-4 bg-[white] text-[#171717] text-md font-medium rounded-b-3xl shadow-lg shadow-white z-40" : "hidden"}>
            <Link href="/profile" className={`${activeNav2} active:scale-105 transition-all`}>Profile</Link>
            <button className="font-medium px-4 py-2 rounded-full transition-all bg-[#171717] text-white hover:scale-95 active:scale-105" onClick={() => signOut()}>Sign Out
            </button>
          </div>
          <IoIosMenu className="text-[38px] z-50 cursor-pointer md:hidden hover:scale-95 active:scale-105" onClick={burgerPopup}/>
          <div className={burgerPop ? "absolute top-8 right-0 w-[170px] pt-12 pb-5 flex flex-col items-center space-y-4 bg-[white] text-[#171717] text-md font-medium rounded-b-3xl shadow-lg shadow-white md:hidden" : "hidden"}>
            <Link href="/home" className={`${activeNav1} active:scale-105 transition-all`}>Home</Link>
            <Link href="/profile" className={`${activeNav2} active:scale-105 transition-all`}>Profile</Link>
            <button className="font-medium px-4 py-2 rounded-full transition-all bg-[#171717] text-white hover:scale-95 active:scale-105" onClick={() => signOut()}>Sign Out
            </button>
            {/* <div className="flex">
              <img
              src={profile.image}
              alt="profile-pic"
              className="flex size-10 rounded-full transition-all z-50 hover:ring-4 hover:ring-[#171717]/70 hover:scale-95 active:scale-105"
              onClick={handleProfilePopup}/>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="w-screen h-[10vh] px-12 py-4 text-[#171717] flex justify-center items-center">
      <div className="container max-h-[80px] mx-auto px-16 py-4 bg-white flex justify-between items-center rounded-full shadow-lg shadow-white">
        <div className="flex items-center space-x-2">
          <Link href="/home" className="font-medium text-xl">
              <LuTwitter className="text-3xl" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center justify-between space-x-10">
          <li className={`${activeNav1} font-medium text-xl transition-all`}>
            <Link href="/home">Home</Link>
          </li>
        </ul>
        <button
          className="hidden md:flex font-medium text-lg px-4 py-2 rounded-full transition-all bg-[#171717] text-white hover:scale-95 active:scale-105"
          onClick={() => router.push("/")}
        >
          Sign In
        </button>
        <IoIosMenu className="text-[38px] z-50 cursor-pointer md:hidden hover:scale-95 active:scale-105" onClick={burgerPopup}/>
          <div className={burgerPop ? "absolute top-8 right-0 w-[170px] pt-12 pb-5 flex flex-col items-center space-y-4 bg-[white] text-[#171717] text-md font-medium rounded-b-3xl shadow-lg shadow-white md:hidden" : "hidden"}>
            <Link href="/home" className={`${activeNav1} active:scale-105 transition-all`}>Home</Link>
            <Link href="/profile" className={`${activeNav2} active:scale-105 transition-all`}>Profile</Link>
            <button className="font-medium px-4 py-2 rounded-full transition-all bg-[#171717] text-white hover:scale-95 active:scale-105" onClick={() => router.push("/")}>Sign In
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
