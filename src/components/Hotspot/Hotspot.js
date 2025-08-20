import React, { useState } from 'react';
import { Html } from '@react-three/drei';

export default function Hotspot({ position, label, onLabelChange, index }) {
  const [editing, setEditing] = useState(!label);
  const [text, setText] = useState(label || '');

  const handleSave = () => {
    onLabelChange(index, text);
    setEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color="red" />
      </mesh>
      
      <Html position={[0, 0.2, 0]} center>
        <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-lg border min-w-[80px] text-center">
          {editing ? (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              className="text-xs border-none outline-none bg-transparent text-center w-full"
              placeholder="Label"
              autoFocus
            />
          ) : (
            <div 
              className="text-xs cursor-pointer hover:bg-gray-100 px-1 py-0.5 rounded"
              onClick={() => setEditing(true)}
            >
              {text || 'Click to label'}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}