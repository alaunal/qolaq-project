import React from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const pageTransition: any = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const pageVariants: any = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Layout = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();

  return (
    <main className="bg-slate-50 w-full min-h-screen flex justify-center items-center px-4 lg:px-0">
      <div className="w-full lg:w-2/5 py-8">
        <div className="block text-center mb-5">
          <h1 className="font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-300 to-amber-500">
            METAMASK
          </h1>
          <p className="text-gray-600 text-lg">From Transfer</p>
        </div>
        <div className="bg-white w-full block rounded-lg shadow-sm border border-gray-100 px-5 py-8">
          <Navigation />
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            {outlet}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
