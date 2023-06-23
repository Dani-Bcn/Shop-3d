import { Canvas } from "@react-three/fiber";
import React from "react";
import { Title } from "../components_3d/Title";
import { Environment, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Mesh } from "three";

export default function Scene_home() {
  return (
    <main>
      <Canvas>
        <Environment preset="city" />
        <ScrollControls
          pages={0}
          damping={0.5}
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
