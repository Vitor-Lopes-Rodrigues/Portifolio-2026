import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const SpeedTunnel = (props) => {
    const ref = useRef();
    // Gera 8000 pontos em um formato de cilindro/túnel
    const positions = useMemo(() => {
        const pos = new Float32Array(8000 * 3);
        for (let i = 0; i < 8000; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 1.5 + Math.random() * 3; // Raio do túnel
            const z = (Math.random() - 0.5) * 20; // Comprimento do túnel
            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = Math.sin(angle) * radius;
            pos[i * 3 + 2] = z;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        // Faz o túnel girar e as partículas se moverem para frente
        ref.current.rotation.z += delta * 0.1;
        const positions = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 2] += delta * 0.2; // Velocidade das partículas
            if (positions[i + 2] > 10) {
                positions[i + 2] = -5; // Reinicia a posição lá atrás
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <group rotation={[0, 0, 0]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#915eff' // Cor neon roxa
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // Additive blending para efeito de luz
                />
            </Points>
        </group>
    );
};

const DynamicHero3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <color attach="background" args={['#050816']} />
            <fog attach="fog" args={['#050816', 3, 12]} /> {/* Adiciona neblina para profundidade */}
            <ambientLight intensity={0.5} />
            <SpeedTunnel />
        </Canvas>
    );
};

export default DynamicHero3D;