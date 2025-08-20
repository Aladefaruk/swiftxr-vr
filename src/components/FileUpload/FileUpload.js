import React, { useRef } from 'react';

export default function FileUpload({ onFileUpload }) {
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.name.endsWith('.glb') || file.name.endsWith('.gltf'))) {
      try {
        const url = URL.createObjectURL(file);
        onFileUpload(url);
      } catch (error) {
        console.error('Error creating object URL:', error);
      }
    }
  };

  return (
    <div className="absolute top-4 left-4 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
      <input
        ref={fileInputRef}
        type="file"
        accept=".glb,.gltf"
        onChange={handleFileChange}
        className="mb-3 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <div className="text-sm text-gray-600">Click on the model to add hotspots</div>
    </div>
  );
}