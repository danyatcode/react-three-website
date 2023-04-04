import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import ModelsData from '../ModelsData'
import CanvasLoader from './CanvasLoader'



 function Model() {

    const { modelId } = useParams();

    function Scene() {
        const { scene } = useGLTF(ModelsData[modelId - 1].path)
        return (
        <Suspense>
          <primitive
              receiveShadow
              object={scene}
              scale={0.4} 
              position={[0, -3, 0]}
              rotation={[0, 1.2, 0]}
          />
          </Suspense>
        )
      }

  return (
    <div className='w-full h-full canvas-div' style={{height: "100vh"}}>
  
      <Canvas dpr={[1, 2]} camera={{ position: [0, -3, 0], fov: 25 }}>
      <color attach="background" args={['#777']} />
        <directionalLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 20, 0]} intensity={1.5} />
        <directionalLight position={[0, -10, 0]} intensity={1} />
          <Suspense fallback={<CanvasLoader />}>
            <Scene />
          </Suspense>
        <OrbitControls
        />
      </Canvas>
    </div>
  )
}
  



export default Model;