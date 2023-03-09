// import "./styles.css";
// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// extend({ OrbitControls });
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";
import useGrayScaleMode from "@hooks/useGrayScaleMode";

const Model = () => {
  const ref = useRef();
  // ref.current.material.grayscale = 1;

  useFrame(() => {
    // ref.current.position.x += 0.5;
    ref.current.rotation.x += 0.001;
    // ref.current.rotation.y += 0.001;

    // if (ref.current.position.x > 300) {
    //   ref.current.position.x = -300;
    // }
  });

  const gltf = useLoader(GLTFLoader, "/Globe_v4.4.glb");
  return (
    <group ref={ref} grayscale={1}>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default function App() {
  const [grayscaleMode, setGrayscaleMode] = useGrayScaleMode();
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <pointLight position={[1200, 1000, 1500]} />
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  );
}

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      // minPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      minDistance={200}
      maxDistance={100}
      // grayscale={0.5}
    />
  );
};
