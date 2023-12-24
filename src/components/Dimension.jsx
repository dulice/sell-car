import React from "react";
import { dimensions } from "../config/constants";

const Dimension = () => {
  return (
    <>
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
    </>
  );
};

export default Dimension;
