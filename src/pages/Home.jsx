import React from "react";

import Nav from "../components/Nav";
import { specifications } from "../config/constants";
import CustomButton from "../components/CustomButton";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { slideAnimation } from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <div className='container mx-auto px-4'>
          <Nav/>
          <div>
            <motion.div {...slideAnimation('left')} className="absolute top-20">
              <h1 className="heading">
                2015 PORSCHE 911 <br />
                CARRERA
              </h1>
              <h1 className="heading">$96,200</h1>
            </motion.div>
            <motion.div {...slideAnimation('right')} className="z-10 absolute right-10 top-2/3">
                <CustomButton
                title="More Options"
                type="fill"
                onClick={() => state.intro = false}
                />
            </motion.div>
            <motion.div {...slideAnimation('up', 0.6)} className="details">
              {specifications.map((spec, i) => (
                <div key={i} className="mb-4">
                  <spec.icon className="text-3xl" />
                  <p className="text-lg font-bold my-2">{spec.title}</p>
                  <p>{spec.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Home;
