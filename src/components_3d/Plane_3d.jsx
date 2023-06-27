import React from 'react'

export default function Plane_3d() {
  return (
    <group>
        <mesh>
          <boxBufferGeometry/>
          <meshStandardMaterial
            color={"rgb(20,50,100)"}
          />
        </mesh>
    </group>
  )
}
