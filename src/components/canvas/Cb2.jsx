import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cb2 = ({ isMobile, animationPaused }) => {
  const model = useGLTF("./cb2/scene.gltf");
  const floatingSpeed = 0.200005;
  const rotationSpeed = 0.0035;
  const [rotationAngle, setRotationAngle] = useState(0);
  const [floatingBase, setFloating] = useState(0);
  const [direction, setDirection] = useState(1);
  const [rotationDirection, setRotationDirection] = useState(1);

  useFrame((state, delta) => {
    if (!animationPaused) {
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
        if (prevAngle > 0.01) {
          newRotationDirection = -1
          setRotationDirection(newRotationDirection);
        }
        else if (prevAngle < -0.01) {
          newRotationDirection = 1;
          setRotationDirection(newRotationDirection);
        }

        const newAngle = prevAngle + newRotationSpeed * delta * newRotationDirection;
        return newAngle >= Math.PI * 2 ? 0 : newAngle;
      });
    }
  });

  return (
    <mesh
      position={[floatingBase, -floatingBase, -floatingBase]}
      rotation={[rotationAngle * 3, rotationAngle, rotationAngle / 4]}
    >
      <hemisphereLight intensity={0.9} />
      <pointLight intensity={200} position={[0, 1, -7]} />
      <pointLight intensity={800} position={[0, 0, 20]} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.6 : 1.4}
        position={isMobile ? [0, -2, 6] : [0, -3, -2]}
        rotation={[-0.1, -1.4, -0.3]}
      />
    </mesh>
  );
};

const Cb2Canvas = () => {
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
        <Cb2 isMobile={isMobile} animationPaused={animationPaused} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Cb2Canvas;
