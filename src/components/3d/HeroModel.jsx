import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
const HeroModel = () => {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('/models/hero.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 4) / 8;
    meshRef.current.rotation.x = Math.cos(t / 4) / 8;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        // geometry={nodes.Scene.children[0].geometry}

        material={materials.Material}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <Environment preset="city" />
    </Float>
  );
};

export default HeroModel; 