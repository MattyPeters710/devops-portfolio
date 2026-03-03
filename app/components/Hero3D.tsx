"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial } from "@react-three/drei";

function FloatingShape({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color="#22d3ee" distort={0.4} speed={2} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />

      <FloatingShape position={[-2, 0, 0]} />
      <FloatingShape position={[2, 0, 0]} />
      <FloatingShape position={[0, 2, -2]} />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}