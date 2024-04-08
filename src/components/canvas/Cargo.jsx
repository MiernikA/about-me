import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cargo = ({ isMobile, animationPaused }) => {
  const model = useGLTF("./cargo/scene.gltf");
  const floatingSpeed = 0.300005
  const rotationSpeed = 0.015;
  const [rotationAngle, setRotationAngle] = useState(0);
  const [floatingBase, setFloating] = useState(0);
  const [direction, setDirection] = useState(1);
  const [rotationDirection, setRotationDirection] = useState(1);

  useFrame((state, delta) => {
    if (!animationPaused) {
      setFloating((prevPos) => {
        let newDirection = direction;
        if (prevPos > 3) {
          newDirection = -1;
          setDirection(newDirection);
        } else if (prevPos < -3) {
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
    }
  });

  return (
    <mesh position={[floatingBase, -floatingBase, -floatingBase]} rotation={[rotationAngle / 6, rotationAngle, rotationAngle / 4]}>
      <hemisphereLight intensity={0.4} />
      <pointLight intensity={600} position={[0, 0, 3]} />
      <pointLight intensity={1000} position={[0, 10, -30]} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.003 : 0.004}
        position={isMobile ? [-20, -2, 6] : [-2, -5, 15]}
        rotation={[0.3, 2.9, 0.2]}
      />
    </mesh>
  );
};

const CargoCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(false);
  const animationRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const handleVisibilityChange = () => {
      setAnimationPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
        <Cargo isMobile={isMobile} animationPaused={animationPaused} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CargoCanvas;
