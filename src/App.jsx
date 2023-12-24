import React, { Suspense } from "react";
import Home from "./pages/Home";
import Specification from "./pages/Specification";
import CanvasModal from "./canvas/CanvasModal";
import { useSnapshot } from "valtio";
import { state } from "./store";
import { adjustColor } from "./config/helper";
import Loading from "./components/Loading";
import ContextProvider from "./context/SizeContext";

const App = () => {
  const snap = useSnapshot(state);

  return (
    <ContextProvider>
      <div
        style={{
          backgroundColor: snap.color + "50",
          color: adjustColor(snap.color),
        }}
      >
        <Suspense fallback={<Loading />}>
          <CanvasModal/>
        </Suspense>
        <Home />
        <Specification/>
      </div>
    </ContextProvider>
  );
};

export default App;
