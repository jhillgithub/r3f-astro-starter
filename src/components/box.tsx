import { Mesh } from "three";
import { useRef, useState } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";

export const Box = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((_, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "orchid" : "turquoise"} />
    </mesh>
  );
};
