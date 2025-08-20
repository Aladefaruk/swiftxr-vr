import React, { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Model from '../Model/Model';
import Hotspot from '../Hotspot/Hotspot';

export default function Scene({ modelUrl, hotspots, onAddHotspot, onUpdateLabel }) {
  const controlsRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableRotate = true;
      controlsRef.current.enablePan = true;
      controlsRef.current.enableZoom = true;
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls ref={controlsRef} args={[null, gl.domElement]} />
      
      {modelUrl && <Model url={modelUrl} onModelClick={onAddHotspot} />}
      
      {hotspots.map((hotspot, index) => (
        <Hotspot 
          key={index} 
          index={index}
          position={hotspot.position} 
          label={hotspot.label}
          onLabelChange={onUpdateLabel}
        />
      ))}
    </>
  );
}