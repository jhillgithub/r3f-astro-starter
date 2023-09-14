import { Canvas } from "@react-three/fiber";
import { Box } from "./box";
import { Environment } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas>
      <color attach="background" args={["slategray"]} />
      <Environment files="/background-1k.hdr" />

      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.4} position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};
