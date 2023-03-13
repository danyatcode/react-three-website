import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Environment, OrbitControls } from "@react-three/drei";
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react';

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function Scene() {
  const fbx = useLoader(FBXLoader, '/azu.fbx')
  return <primitive object={fbx} />
}

function App() {
  return (
    <div id="App" className='App'>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="city" background />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;
