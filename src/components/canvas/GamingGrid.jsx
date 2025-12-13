import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

const MovingGrid = () => {
    const gridRef = useRef();

    useFrame((state, delta) => {
        if (gridRef.current) {
            // Faz o grid "andar" para trás simulando movimento para frente
            gridRef.current.position.z = (state.clock.getElapsedTime() * 10) % 10;
        }
    });

    return (
        <group ref={gridRef}>
            {/* Grid Principal (Chão) */}
            <gridHelper
                args={[100, 100, 0xff6b00, 0xff6b00]} // Cor Laranja Tático
                position={[0, -2, 0]}
                rotation={[0, 0, 0]}
            />
            {/* Grid Secundário (Teto - Opcional, dá efeito de túnel) */}
            <gridHelper
                args={[100, 100, 0x4caf50, 0x4caf50]} // Cor Verde Militar
                position={[0, 10, 0]}
                rotation={[0, 0, 0]}
            />
        </group>
    );
};

const GamingGridCanvas = () => {
    return (
        <Canvas className="w-full h-full">
            {/* Câmera posicionada para ver o chão como um horizonte */}
            <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={75} />

            {/* Luz ambiente fraca */}
            <ambientLight intensity={0.2} />

            {/* Névoa para o grid sumir no fundo suavemente (cor do fundo #121212) */}
            <fog attach="fog" args={['#121212', 5, 40]} />

            <MovingGrid />
        </Canvas>
    );
};

export default GamingGridCanvas;