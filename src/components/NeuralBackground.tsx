import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate random points for neural nodes
  const particlesCount = 300;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  // Generate connections between nearby nodes
  const linePositions = useMemo(() => {
    const lines: number[] = [];
    const maxDistance = 2.5;

    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < maxDistance) {
          lines.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }

    return new Float32Array(lines);
  }, [positions]);

  useFrame((state) => {
    if (pointsRef.current && linesRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Gentle rotation and oscillation
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      
      linesRef.current.rotation.y = time * 0.05;
      linesRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;

      // Mouse parallax effect
      pointsRef.current.rotation.x += mousePosition.y * 0.0005;
      pointsRef.current.rotation.y += mousePosition.x * 0.0005;
      
      linesRef.current.rotation.x += mousePosition.y * 0.0005;
      linesRef.current.rotation.y += mousePosition.x * 0.0005;

      // Pulse nodes
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const originalY = positions[i3 + 1];
        positions[i3 + 1] = originalY + Math.sin(time + i * 0.1) * 0.01;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Neural nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#5DD9FF"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Neural connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#A855F7" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

export default function NeuralBackground() {
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    mousePosition.current = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    };
  };

  return (
    <div 
      className="fixed inset-0 -z-10" 
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['#050A14']} />
        <ambientLight intensity={0.5} />
        <NeuralNetwork mousePosition={mousePosition.current} />
      </Canvas>
    </div>
  );
}
