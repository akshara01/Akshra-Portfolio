
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Python = (props) => {
  const { nodes, materials } = useGLTF('models/python.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8,8,0]} scale={0.001} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Python_Python_0.geometry}
          material={materials.Python}
          position={[0,0.079,0.181]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={90}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/python.glb')

export default Python