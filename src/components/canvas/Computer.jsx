import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Blob = () => {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.2;
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#915eff"
                attach="material"
                distort={0.5} // Intensidade da distorção
                speed={2} // Velocidade da animação
                roughness={0}
            />
        </Sphere>
    );
}

const Hero3D = () => {
    return (
        <Canvas className="cursor-pointer" camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Blob />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}

export default Hero3D;