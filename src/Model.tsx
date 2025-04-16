import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const fbx = useFBX("/1.fbx");
  const fbx2 = useFBX("/2.fbx");
  const fbx3 = useFBX("/3.fbx");

  useFrame(() => {
    // Rotate the model for a simple animation
    fbx.rotation.y += 0.01;
    fbx2.rotation.y += 0.02;
    fbx3.rotation.y += 0.03;
  });

  return (
    <>
      <group>
        <primitive object={fbx} scale={0.075} position={[-15, -5, 1]} />
      </group>
      <group>
        <primitive object={fbx2} scale={0.075} position={[0, -5, 1]} />
      </group>
      <group>
        <primitive object={fbx3} scale={0.075} position={[15, -5, 1]} />
      </group>
    </>
  );
};

export default Model;
