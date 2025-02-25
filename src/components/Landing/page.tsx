"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Landing() {
  return (
    <motion.section
      whileInView={{
        y: [0, 100],
      }}
      className="flex max-md:flex-col-reverse min-h-[50vh] justify-center container mx-auto  my-20"
    >
      <div className="main-landing flex-shrink-0 flex flex-col gap-8">
        <small className="">Free 30 Days TRIAL</small>
        <h1 className="text-6xl font-bold">
          The Best way <br />
          to Showcase <br />
          Your Projects
        </h1>
        <p>Here You Can Put a Short Descroption about your projects</p>
        <div className="button flex gap-3">
          <button className="bg-[#3FB8A9] px-4 py-2 rounded-md">
            Contatcs Us
          </button>
          <button className="px-4 py-2 rounded-md border border-[#3FB8A9] ">
            Show Our Projects
          </button>
        </div>
      </div>
      <div className="image  relative max-w-full">
        <Image
          width={750}
          height={390}
          className="object-contain"
          src="/banner-art.svg"
          alt="Banner"
        />
      </div>
    </motion.section>
  );
}
