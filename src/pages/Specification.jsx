import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { carColors } from "../config/constants";
import CustomButton from "../components/CustomButton";
import { TbArrowLeft } from "react-icons/tb";
import { slideAnimation } from "../config/motion";
import { useContext, useState } from "react";
import Mechnism from "../components/Mechnism";
import Dimension from "../components/Dimension";
import Checkout from "../components/Checkout";
import { Context } from "../context/SizeContext";
import { adjustColor } from "../config/helper";

const Specification = () => {
  const snap = useSnapshot(state);
  const windowSize = useContext(Context);
  const [selectColor, setSelectColor] = useState("bg-black");

  return (
    <AnimatePresence>
      {!snap.intro && (
        <div className="absolute top-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-4">
              <div
                className="relative"
                style={{
                  height:
                    windowSize.width <= 640
                      ? windowSize.height / 3 + "px"
                      : windowSize.height / 2 + "px",
                }}
              >
                <motion.div {...slideAnimation("left", 0.5)}>
                  <CustomButton
                    type="outline"
                    title={<TbArrowLeft color={adjustColor(snap.color)}/>}
                    onClick={() => (state.intro = true)}
                  />
                </motion.div>
                <motion.div
                  {...slideAnimation("left", 0.5)}
                  className="flex flex-col absolute top-[30%] "
                >
                  {carColors.map((car, id) => (
                    <button
                      key={car.color}
                      className={`w-6 h-6 rounded-full m-1 ${
                        selectColor === car.color ? "ring-2 ring-white" : ""
                      } ${car.color}`}
                      onClick={() => {
                        state.color = car.hex;
                        setSelectColor(car.color);
                      }}
                    ></button>
                  ))}
                </motion.div>
              </div>

              <motion.div {...slideAnimation("up", 0.8)}>
                <p className="font-bold text-xl mb-4">Specifications</p>
                <Mechnism />
                <Dimension />
                <div className="float-right z-10 my-4">
                  <Checkout />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Specification;
