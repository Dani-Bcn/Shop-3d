import { Canvas } from '@react-three/fiber'
import React from 'react'
import Plane from '../components_3d/Plane_3d'
import { Environment, ScrollControls ,Scroll, PerspectiveCamera, OrbitControls} from '@react-three/drei'

export default function Scene_3d() {
  return (  
        <Canvas>
          <Environment
            preset='city'
          />
          <PerspectiveCamera
            position={[0,0,5]}
          />
          <OrbitControls/>
          <ScrollControls
            pages={0}
            damping={0.3}
          >
            <Scroll>
              <Plane/>
            </Scroll>
          </ScrollControls>            
        </Canvas>   
  )
}
