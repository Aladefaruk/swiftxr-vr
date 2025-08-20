# Mini 3D Editor

A React + ThreeJS mini-editor for importing and labeling 3D models.

## Features

- Import .GLB files
- Rotate and pan around 3D models
- Add hotspot labels by clicking on the model
- Minimal, clean interface

## Setup

```bash
npm install
npm start
```

## Usage

1. Click "Choose File" to upload a .GLB model
2. Use mouse to rotate (drag) and zoom (scroll) around the model
3. Click anywhere on the model to add a red hotspot
4. Hotspots appear as red spheres with white label backgrounds

## Architecture

- `App.js` - Main component with file upload and state management
- `Scene` - ThreeJS scene setup with lighting and controls
- `Model` - GLB model loader with click handling
- `Hotspot` - Interactive label components positioned in 3D space