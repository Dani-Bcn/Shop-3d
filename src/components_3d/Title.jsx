import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Title(props) {
  const { nodes, materials } = useGLTF("https://res.cloudinary.com/nneodani/image/upload/v1687706978/archives_gltf/vzmtbk0tl2vxiskkbugb.glb");
  return (
    <group {...props} dispose={null}
    
    scale={0.05}
    position={[-2,0,0]}
    rotation={[0,0.5,0]}
    
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude.geometry}
        material={nodes.Extrude.material}
      />
    </group>
  );
}
