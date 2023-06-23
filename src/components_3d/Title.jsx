
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Title(props) {
  const { nodes, materials } = useGLTF("/Title.glb");
  return (
    <group {...props} dispose={null}
      scale={0.05}
      position={[0,0,0]}
    >
      <mesh
      position={[-50,0,0]}
        rotation={[0,0.5,0]}
        castShadow
        receiveShadow
        geometry={nodes.Extrude.geometry}
       
      >
          <meshStandardMaterial
            color="rgb(100,20,20)"
            roughness={2}
          />

      </mesh>
    </group>
  );
}

useGLTF.preload("/Title.glb");