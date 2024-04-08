import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const HelmetObject = ({ isMobile }) => {
  const computer = useGLTF("./helmet/scene.gltf");
  const meshRef = useRef();
  const floatingSpeed = 0.0025
  const [rotationAngle, setRotationAngle] = useState(0);
  const [floatingBase, setFloating] = useState(0);


  useFrame(() => {
    setFloating((prevPos) => prevPos < 4 ? prevPos + floatingSpeed : prevPos);
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[0, 0, rotationAngle]}
      position={[floatingBase, -floatingBase, -floatingBase]}
    >

      <hemisphereLight intensity={0.25} />
      <pointLight intensity={8000} position={[2, 50, 30]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 65}
        position={[10, -100, 10]}
        rotation={[-0.3, 0.3, 0.2]}
      />
    </mesh>
  );
};

const Helmet = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" absolute bottom-0 right-0 w-96 h-[600px] md:block hidden">
      <Canvas
        frameloop="demand"
        shadows
        className="w-full h-full"
        dpr={[1, 2]}
        camera={{ position: [135, 135, 135] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <HelmetObject isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Helmet;
