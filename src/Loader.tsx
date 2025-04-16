import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress, item } = useProgress();
  return (
    <Html center>
      <progress value={Math.round(progress)} max={100} />
      <p>{Math.round(progress)} %</p>
      <p>{`Loading ${item}...`}</p>
    </Html>
  );
};

export default Loader;
