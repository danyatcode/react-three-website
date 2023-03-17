import React, { Suspense, useEffect, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import CanvasLoader from './CanvasLoader';

const Scene = () => {
    const materials = useLoader(MTLLoader, `${process.env.PUBLIC_URL}/models/az4.mtl`);
    const azumi = useLoader(OBJLoader, `${process.env.PUBLIC_URL}/models/az4.obj`, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });
  
    return <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[100, 100, 50]}
          angle={0.12}
          penumbra={1}
          intensity={0.25}
          castShadow
          shadow-mapSize={1024}
          color="#d40012"
        />
        <pointLight
         intensity={1} 
         position={[200, -300, -100]}
        />
      <primitive 
        object={azumi} 
        scale={0.05} 
        position={[0, -3, -1.5]}
        rotation={[0, 1.2, 0]}
      />;
    </mesh>
};
{/* <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-500, 100, -100]}
          angle={0.12}
          penumbra={1}
          intensity={0.25}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
      <primitive 
        object={azumi} 
        scale={0.05} 
        position={[0, -3, -1.5]}
      />; */}
const Azumi = () => {

    return (
        <div className='w-full h-full canvas-div'>
          <Canvas
           frameloop='demand'
           shadows
           dpr={[1, 2]}
           camera={{ position: [20, 3, 5], fov: 25 }}
           gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense 
              fallback={<CanvasLoader />}
            >
              <Scene />
              <OrbitControls 
                // enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Suspense>

            <Preload all />
        </Canvas>  
    </div>
    )
}

export default Azumi
