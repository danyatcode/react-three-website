import { MeshPhysicalMaterial } from "three"
import { useMemo } from 'react'
import { Canvas, applyProps } from '@react-three/fiber'
import { Center, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { Effect } from './Effect'


export default function Model() {
  return (
    <div className='w-full h-full canvas-div' style={{height: "100vh"}}>
      <Canvas shadows camera={{ position: [8, 0, 8], fov: 25 }}>
        <group position={[0, -0.5, 0]}>
        <directionalLight position={[-10, 10, 0]} intensity={0.9} />
          <directionalLight position={[30, 40, -15]} intensity={0.5} />
          <directionalLight position={[50, 20, -30]} intensity={0.3} />
          <directionalLight position={[-2, -10, 0]} intensity={0.5} />
          <Center position={[0, 0.5, 0]}>
            <Suzi scale={0.24} rotation={[0, 0.8, 0]} />
          </Center>
          <Effect />  
        </group>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Environment preset="city">
        </Environment>
      </Canvas>
    </div>
  )
}

function Suzi(props) {
  const { scene, nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/4.glb`);
  console.log(nodes, materials, Object.keys(scene.children))
  useMemo(() => {
 
    applyProps(materials["lambert4SG.001"], { emissiveIntensity: 1.5, toneMapped: false, emissive: "#ff1f30" })
    nodes.az4001_1.material = new MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 1,
      color: '#757575',
      envMapIntensity: 0,
      clearcoatRoughness: 0,
      clearcoat: 1
    })
    nodes.az4001_8.material = new MeshPhysicalMaterial({
      roughness: 0.5,
      metalness: 0.9,
      color: '#c8c8c8',
      envMapIntensity: 0,
      clearcoatRoughness: 0,
      clearcoat: 1
    })
    nodes.az4001_6.material = new MeshPhysicalMaterial({
      color: '#DFD0C5',
      envMapIntensity: 0,
      clearcoatRoughness: 0,
      clearcoat: 1
    })
  }, [nodes, materials])
  
  return <>
    <primitive object={scene} {...props} />
  </>
}
