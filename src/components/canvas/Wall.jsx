import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  Preload,
  useTexture,

} from "@react-three/drei";

import { technologies } from "../../constants";

const Cube = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const { position, rotation, i, j, isMobile } = props;
  const time = useRef(0);

  useFrame(() => {
    if (!isMobile) {
      time.current += 0.01;
      meshRef.current.position.y = Math.sin(time.current) * 0.4 + i * 3 - 2;
    }
  });

  const handleClick = () => {
    if (!isMobile) {
      let count = 0;
      const intervalId = setInterval(() => {
        if ((i + j) % 2 === 0) {
          meshRef.current.rotation.x += (Math.PI * 2) / 90;
        } else {
          meshRef.current.rotation.y += (Math.PI * 2) / 90;
        }
        count++;
        if (count >= 90) {
          clearInterval(intervalId);
        }
      }, 1);
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.9}>

      <ambientLight intensity={0.45} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        onClick={handleClick}
      >
        <boxGeometry
          args={[isMobile ? 1.5 : 2.5, isMobile ? 1.5 : 2.5, 0.5]}
        />
        <meshStandardMaterial
          color="black"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={isMobile ? 1.5 : 2.5}
          map={decal}
          flatShading
          onPointerOver={props.onPointerOver}
          onPointerLeave={props.onPointerLeave}
        />
      </mesh>
    </Float>
  );
};

const Wall = ({ rows, columns, spacing, isMobile }) => {
  const managePopoff = (e, ct) => {
    if (!isMobile) {
      const popoff = document.getElementById("popoff");
      const offsetX = e.clientX + 10;
      const offsetY = e.clientY + window.scrollY;
      popoff.style.left = offsetX + "px";
      popoff.style.top = offsetY + "px";
      popoff.classList.add('select-none')
      popoff.classList.remove('hidden')
      popoff.textContent = technologies[ct].name;

      const handleZoom = () => {
        popoff.style.left = offsetX + "px";
        popoff.style.top = offsetY + "px";
      };

      document.addEventListener("wheel", handleZoom);

      popoff.addEventListener("mouseleave", () => {
        document.removeEventListener("wheel", handleZoom);
      });
    }
  };

  const cubes = [];
  var ct = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const position = [
        j * (2 + spacing) -
        (columns * (2 + spacing)) / 2 +
        (2 + spacing) / 2,
        i * (2 + spacing) -
        (rows * (2 + spacing)) / 2 +
        (2 + spacing) / 2,
        0
      ];
      const tmp = ct;
      cubes.push(
        <Cube
          imgUrl={technologies[ct].icon}
          position={position}
          i={i}
          j={j}
          rotation={[0, 0, 0]}
          key={`${i}-${j}`}
          onPointerOver={(event) => managePopoff(event, tmp)}
          onPointerLeave={() =>
            (document.getElementById('popoff').classList.add('hidden'))
          }
          isMobile={isMobile}
        />
      );
      if (ct === technologies.length - 1) {
        ct = 0;
      } else {
        ct++;
      }
    }
  }
  return cubes;
};

const Scene = ({ isMobile }) => {
  return (
    <>
      <Wall
        rows={Math.ceil(technologies.length / (isMobile ? 4 : 6))}
        columns={isMobile ? 3 : 6}
        spacing={isMobile ? 0.1 : 2}
        isMobile={isMobile}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
    </>
  );
};

const WallCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "100vh" : "600px",
        overflow: "hidden"
      }}
    >
      <Canvas
        className='hover:cursor-pointer'
        camera={{ position: [0, -0.2, 8] }}>
        <Preload all />
        <Scene isMobile={isMobile} />
      </Canvas>
      {isMobile ? null : (
        <div
          id="popoff"
          className="absolute b-0 r-0 z-100 w-32 h-6 bg-black/50 rounded italic text-center content-center hidden "
        >
          Hello
        </div>
      )
      }
    </div >
  );
};

export default WallCanvas;

