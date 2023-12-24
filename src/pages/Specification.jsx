import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { carColors, dimensions, mechanism } from "../config/constants";
import CustomButton from "../components/CustomButton";
import { TbArrowLeft } from "react-icons/tb";
import { slideAnimation } from "../config/motion";
import StripeCheckout from "react-stripe-checkout";
const port = "http://localhost:5173";

const Specification = () => {
  console.log();
  const snap = useSnapshot(state);
  const handleToken = (token, address) => {
    fetch(`${port}`, {
      method: "post",
      body: JSON.stringify(token),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <div className="fixed top-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="grid xl:grid-cols-2 grid-cols-1 mt-4">
              <div
                style={{
                  height:
                    window.innerWidth <= 640
                      ? window.innerHeight / 3 + "px"
                      : window.innerHeight / 2 + "px",
                }}
              >
                <motion.div {...slideAnimation("left", 0.5)}>
                  <CustomButton
                    type="outline"
                    title={<TbArrowLeft />}
                    onClick={() => (state.intro = true)}
                  />
                </motion.div>
                <motion.div
                  {...slideAnimation("left", 0.5)}
                  className="flex flex-col absolute md:top-[25%] top-[10%] left-10 "
                >
                  {carColors.map((car) => (
                    <button
                      key={car.color}
                      className={`w-6 h-6 rounded-full m-1 ${car.color}`}
                      onClick={() => (state.color = car.hex)}
                    ></button>
                  ))}
                </motion.div>
              </div>

              <motion.div {...slideAnimation("up", 0.8)}>
                <p className="font-bold text-xl mb-4">Specifications</p>
                <p className="font-bold text-lg">Mechnism</p>
                <table className="table-auto">
                  <tbody>
                    {mechanism.map((mech) => (
                      <tr key={mech.category}>
                        <td>{mech.category}</td>
                        <td className="ps-10">{mech.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="font-bold text-lg mt-4">Dimensions</p>
                <table>
                  <tbody>
                    {dimensions.map((dia) => (
                      <tr key={dia.dimension}>
                        <td>{dia.dimension}</td>
                        <td className="ps-10">{dia.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="float-right z-10 mt-4">
                  <StripeCheckout
                    token={handleToken}
                    stripeKey={import.meta.env.VITE_STRIPE_API_KEY}
                    amount={96200 * 100}
                    currency="USD"
                    shippingAddress
                  >
                    <CustomButton type="fill" title="Buy Now" />
                  </StripeCheckout>
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
