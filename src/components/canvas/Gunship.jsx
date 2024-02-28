import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Gunship = ({ isMobile }) => {
  const model = useGLTF("./gunship/scene.gltf");
  const floatingSpeed = 0.300005
  const rotationSpeed = 0.015;
  const [rotationAngle, setRotationAngle] = useState(0);
  const [floatingBase, setFloating] = useState(0);
  const [direction, setDirection] = useState(1);
  const [rotationDirection, setRotationDirection] = useState(1);

  useFrame((state, delta) => {
    setFloating((prevPos) => {
      let newDirection = direction;
      if (prevPos > 2) {
        newDirection = -1;
        setDirection(newDirection);
      } else if (prevPos < -2) {
        newDirection = 1;
        setDirection(newDirection);
      }
      return prevPos + floatingSpeed * newDirection * delta;
    });

    setRotationAngle((prevAngle) => {
      let newRotationSpeed = rotationSpeed;
      let newRotationDirection = rotationDirection;
      if (prevAngle > 0.2) {
        newRotationDirection = -1
        setRotationDirection(newRotationDirection);
      }
      else if (prevAngle < -0.6) {
        newRotationDirection = 1;
        setRotationDirection(newRotationDirection);
      }

      const newAngle = prevAngle + newRotationSpeed * delta * newRotationDirection;
      return newAngle >= Math.PI * 2 ? 0 : newAngle;
    });
  });
  return (
    <mesh position={[floatingBase, -floatingBase, -floatingBase]} rotation={[rotationAngle / 6, rotationAngle, rotationAngle / 4]}>
      <hemisphereLight intensity={0.15} />
      <pointLight intensity={1000} position={[0, 0, 0]} />
      <pointLight intensity={1600} position={[0, -20, 0]} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.003 : 3}
        position={isMobile ? [-20, -2, 6] : [5, -8, -15]}
        rotation={[0.2, 0.1, -0.4]}
      />
    </mesh>
  );
};

const GunshipCanvas = () => {
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
        <Gunship isMobile={isMobile} />
      </Suspense>



      <Preload all />
    </Canvas>
  );
};

export default GunshipCanvas;
