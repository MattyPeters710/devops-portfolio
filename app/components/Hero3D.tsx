"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial } from "@react-three/drei";

function FloatingShape({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#22d3ee"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 2]} 
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} intensity={1} />

      {/* Floating Shapes */}
      <FloatingShape position={[-3, 0, 0]} />
      <FloatingShape position={[3, 0, 0]} />
      <FloatingShape position={[0, 2, -2]} />

      {/* Camera movement */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}