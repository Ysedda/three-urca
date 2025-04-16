import { Canvas } from "@react-three/fiber";
import "./index.css";
import { Environment, OrbitControls } from "@react-three/drei";
import Loader from "./Loader";
import { Suspense } from "react";
import Model from "./Model";

const App = () => {
  return (
    <div id="canvas-container" className="App">
      <Canvas camera={{ position: [-5, 0, -20], fov: 100 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <OrbitControls />
          <Environment background preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
