import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { Canvas, applyProps } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { FlakesTexture } from 'three-stdlib'

export default function App() {
  return (
    <div className='w-full h-full canvas-div' style={{height: "100vh"}}>
    <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
      <group position={[0, -0.5, 0]}>
      <directionalLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 20, 0]} intensity={1.5} />
        <directionalLight position={[0, -10, 0]} intensity={1} />
        <Center top>
          <Suzi scale={0.04} rotation={[0, 1.2, 0]}/>
        </Center>
        <AccumulativeShadows temporal frames={10} color="orange" colorBlend={2} toneMapped={true} opacity={2} scale={12}>
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 4, -10]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Environment preset="city" />
    </Canvas>
    </div>
  )
}

function Suzi(props) {
  const { scene, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/azu555.glb`);
  console.log(scene.children[0], materials)
  useLayoutEffect(() => {
    scene.children[0].children[1].traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    applyProps(materials["lambert4SG.001"], {
      color: 'orange',
      roughness: 0,
      normalMap: new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping),
      'normalMap-repeat': [40, 40], 
      normalScale: [0.05, 0.05]
    });
    scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
    applyProps(materials, {
      color: 'orange',
      roughness: 0,
      normalMap: new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping),
      'normalMap-repeat': [40, 40], 
      normalScale: [0.05, 0.05]
    });
    

  })
  return <primitive object={scene.children[0].children[5]} {...props} />
  
}
