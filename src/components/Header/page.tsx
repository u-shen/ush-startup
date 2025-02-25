"use client";
import { Links } from "@/lib/Data";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{
        y: -200,
      }}
      animate={{
        y: [0, 0],
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative z-[999] px-10"
    >
      <div className="header bg-[rgba(221,229,194,.2)] backdrop-blur-md fixed left-0 top-0 w-full flex justify-between items-center p-4">
        <div
          style={{ fontFamily: "var(--font-cookie)" }}
          className="logo text-2xl "
        >
          JEMMI
        </div>
        <nav className="links relative backdrop-blur-md">
          <motion.button
            whileTap={{
              scaleY: 1.2,
            }}
            className="text-3xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <MdClose /> : <FaBars />}
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                transition={{
                  duration: 0.5,
                }}
                exit={{
                  height: 0,
                }}
                className="absolute overflow-hidden  bg-[#dde5c2]/15  min-w-[250px] text-xl -left-[200px]
                md:-left-[200px] font-bold top-[60px] flex flex-col gap-4
                p-4 rounded-md"
              >
                {Links.map((link) => (
                  <Link
                    className="flex  gap-2 items-center p-2"
                    key={link.hash}
                    href={link.hash}
                  >
                    <div className="font-extrabold ">{link.icon}</div>
                    {link.name}
                  </Link>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
