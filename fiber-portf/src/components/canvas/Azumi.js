import React, { Suspense, useEffect, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import CanvasLoader from './CanvasLoader';

const Scene = () => {
    const materials = useLoader(MTLLoader, "./models/az1.mtl");
    const azumi = useLoader(OBJLoader, "./models/az1.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });
  
    return <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
      <primitive 
        object={azumi} 
        scale={0.4} 
        position={[0, -1.7, -1.5]}
      />;
    </mesh>
};

const Azumi = () => {

    return (
        <div className='w-full h-full'>
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
