import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Droid = ({ isMobile }) => {
  const model = useGLTF("./droid/scene.gltf");
  const floatingSpeed = 0.100005
  const rotationSpeed = 0.005;
  const [rotationAngle, setRotationAngle] = useState(0);
  const [floatingBase, setFloating] = useState(0);
  const [direction, setDirection] = useState(1);
  const [rotationDirection, setRotationDirection] = useState(1);

  useFrame((state, delta) => {
    setFloating((prevPos) => {
      let newDirection = direction;
      if (prevPos > 1) {
        newDirection = -1;
        setDirection(newDirection);
      } else if (prevPos < -1) {
        newDirection = 1;
        setDirection(newDirection);
      }
      return prevPos + floatingSpeed * newDirection * delta;
    });

    setRotationAngle((prevAngle) => {
      let newRotationSpeed = rotationSpeed;
      let newRotationDirection = rotationDirection;
      if (prevAngle > 0.5) {
        newRotationDirection = -1
        setRotationDirection(newRotationDirection);
      }
      else if (prevAngle < -0.5) {
        newRotationDirection = 1;
        setRotationDirection(newRotationDirection);
      }

      const newAngle = prevAngle + newRotationSpeed * delta * newRotationDirection;
      return newAngle >= Math.PI * 2 ? 0 : newAngle;
    });
  });
  return (
    <mesh position={[floatingBase, -floatingBase, -floatingBase]} rotation={[0, rotationAngle / 6, rotationAngle * 2]}>
      <hemisphereLight intensity={2} />
      <pointLight intensity={2000} position={[5, -10, -15]} />

      <primitive
        object={model.scene}
        scale={isMobile ? 0.003 : 0.06}
        position={isMobile ? [-20, -2, 6] : [0, -17, -12]}
        rotation={[0.3, -0.2, 0]}
      />
    </mesh>
  );
};

const DroiodCanvas = () => {
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
      dpr={[1, 2]}
      camera={{ position: [25, 25, 25] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Droid isMobile={isMobile} />
      </Suspense>



      <Preload all />
    </Canvas>
  );
};

export default DroiodCanvas;
