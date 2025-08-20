import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

function ModelContent({ url, onModelClick }) {
  const { scene } = useGLTF(url);
  
  return (
    <primitive 
      object={scene} 
      onClick={(e) => {
        e.stopPropagation();
        onModelClick(e.point);
      }}
    />
  );
}

export default function Model({ url, onModelClick }) {
  return (
    <Suspense fallback={null}>
      <ModelContent url={url} onModelClick={onModelClick} />
    </Suspense>
  );
}