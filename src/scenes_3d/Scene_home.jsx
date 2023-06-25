import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import Title from "../components_3d/Title";

export default function Scene_home() {
  return (
    <main>
      <Canvas>
        <Environment preset="city" />
        <ScrollControls
          pages={5}
          damping={0.3}
        >
          <spotLight
          position={[0,5,5]}
            intensity={5}
          />
          <PerspectiveCamera
          makeDefault
          position={[0,0,250]}
          fov={1}
          />
          <Scroll>
            <Title />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
