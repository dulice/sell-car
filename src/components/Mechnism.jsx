import React from "react";
import { mechanism } from "../config/constants";

const Mechnism = () => {
  return (
    <>
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
    </>
  );
};

export default Mechnism;
