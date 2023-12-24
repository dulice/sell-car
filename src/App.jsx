import React, { Suspense } from "react";
import Home from "./pages/Home";
import Specification from "./pages/Specification";
import CanvasModal from "./canvas/CanvasModal";
import { useSnapshot } from "valtio";
import { state } from "./store";
import { adjustColor } from "./config/helper";
import Loading from "./components/Loading";

const App = () => {
  const snap = useSnapshot(state);
  return (
    <div
      style={{
        backgroundColor: snap.color + "90",
        color: adjustColor(snap.color),
      }}
    >
      <Suspense fallback={<Loading />}>
        <CanvasModal />
      </Suspense>
      <Home />
      <Specification />
    </div>
  );
};

export default App;
