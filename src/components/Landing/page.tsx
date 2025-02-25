"use client";
import { motion } from "framer-motion";
import { RiScrollToBottomFill } from "react-icons/ri";
import Image from "next/image";

export default function Landing() {
  const text = "Framer Motion is a really cool tool".split(" ");
  return (
    <motion.div
      whileInView={{
        y: [0, 20, 0],
      }}
    >
      <motion.section className="flex max-md:flex-col-reverse min-h-[50vh] container mx-auto justify-center items-center my-20 px-2">
        <div className="main-landing flex flex-col gap-8 flex-grow">
          <div className="App w-1/2">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10,
                }}
                key={i}
                className="text-5xl"
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <p>Here You Can Put a Short Descroption about your projects</p>
          <div className="button flex gap-3">
            <button className="bg-[#dde5c2] px-4 py-2 rounded-md">
              Contatcs Us
            </button>
            <button className="px-4 py-2 rounded-md border border-[#dde5c2] ">
              Show Our Projects
            </button>
          </div>
        </div>
        <div className="image relative w-1/4">
          <Image
            width={650}
            height={390}
            className="object-contain"
            src="/banner-art.svg"
            alt="Banner"
          />
        </div>
      </motion.section>
      <div className="landing-footer relative flex flex-col gap-28">
        <div className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus.
        </div>
        <div className="arrow-btn font-bold text-[#dde5c2] text-8xl animate-bounce w-fit mx-auto">
          <RiScrollToBottomFill />
        </div>
      </div>
    </motion.div>
  );
}
