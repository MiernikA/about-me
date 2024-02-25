import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Spacestation = ({ isMobile }) => {
  const model = useGLTF("./spacestation/scene.gltf");
  const floatingSpeed = 0.0005
  const [rotationAngle, setRotationAngle] = useState(0);
  const [floatingBase, setFloating] = useState(0);

  useFrame(() => {

    setRotationAngle((prevAngle) => prevAngle + floatingSpeed);
    setFloating((prevPos) => prevPos < 3 ? prevPos + floatingSpeed : prevPos);
  });

  return (
    <mesh rotation={[0, 0, rotationAngle]} position={[floatingBase, -floatingBase, -floatingBase]}>
      <hemisphereLight intensity={0.42} />
      <pointLight intensity={350} />
      <primitive
        object={model.scene}
        scale={isMobile ? 12 : 33}
        position={isMobile ? [0, -2, 6] : [4, -5, -10]}
        rotation={[-0.01, -3.03, -0.8]}
      />
    </mesh>
  );
};

const SpacestationCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[10, 2]}
      camera={{ position: [25, 25, 25] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Spacestation isMobile={isMobile} />
      </Suspense>



      <Preload all />
    </Canvas>
  );
};

export default SpacestationCanvas;
