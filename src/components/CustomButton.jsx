import React from "react";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { adjustColor } from "../config/helper";

const CustomButton = ({ title, type, customStyle, onClick }) => {
  const style = {};
  const snap = useSnapshot(state);
  if (type == "fill") {
    style.backgroundColor = snap.color;
    style.color = adjustColor(snap.color);
  } else if (type == "outline") {
    style.boader = "1px solid" + snap.color;
    style.color = snap.color;
  }
  return (
    <button className={`p-3 rounded-sm ${customStyle}`} style={style} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
