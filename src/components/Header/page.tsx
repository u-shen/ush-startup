"use client";
import { Links } from "@/lib/Data";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="md:container md:mx-auto relative z-[999]">
      <div className="header flex justify-between items-center p-4">
        <div
          style={{ fontFamily: "var(--font-cookie)" }}
          className="logo text-2xl "
        >
          JEMMI
        </div>
        <nav className="links relative">
          <button
            className="text-3xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
          {isMenuOpen && (
            <ul className="absolute bg-slate-800/15 min-w-[250px] text-xl -left-[200px] md:-left-[200px] font-bold top-12 flex flex-col gap-4 backdrop-blur-md  p-4 rounded-md shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.]">
              {Links.map((link) => (
                <Link
                  className="flex gap-2 items-center p-2"
                  key={link.hash}
                  href={link.hash}
                >
                  <div className="font-extrabold ">{link.icon}</div>
                  {link.name}
                </Link>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
