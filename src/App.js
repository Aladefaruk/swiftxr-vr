import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene/Scene';
import FileUpload from './components/FileUpload/FileUpload';

export default function App() {
  const [modelUrl, setModelUrl] = useState(null);
  const [hotspots, setHotspots] = useState([]);

  const handleFileUpload = (url) => {
    setModelUrl(url);
    setHotspots([]);
  };

  const addHotspot = (position) => {
    setHotspots(prev => [...prev, { 
      position: [position.x, position.y, position.z], 
      label: '' 
    }]);
  };

  const updateHotspotLabel = (index, label) => {
    setHotspots(prev => prev.map((hotspot, i) => 
      i === index ? { ...hotspot, label } : hotspot
    ));
  };

  return (
    <div className="w-screen h-screen relative bg-gradient-to-br from-gray-50 to-gray-100">
      <FileUpload onFileUpload={handleFileUpload} />
      
      <Canvas 
        camera={{ position: [0, 0, 5] }} 
        style={{ width: '100%', height: '100%', display: 'block', touchAction: 'none' }}
        onPointerDown={(e) => {
          console.log('Canvas pointer down');
          e.target.setPointerCapture(e.pointerId);
        }}
        onPointerMove={() => console.log('Canvas pointer move')}
        onPointerUp={() => console.log('Canvas pointer up')}
      >
        <Scene 
          modelUrl={modelUrl} 
          hotspots={hotspots}
          onAddHotspot={addHotspot}
          onUpdateLabel={updateHotspotLabel}
        />
      </Canvas>
      
      {!modelUrl && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-gray-400">
            <div className="text-6xl mb-4">📦</div>
            <div className="text-xl font-light">Upload a .GLB file to get started</div>
          </div>
        </div>
      )}
    </div>
  );
}
