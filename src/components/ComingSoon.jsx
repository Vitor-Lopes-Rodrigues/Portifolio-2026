import React from "react";
import { motion } from "framer-motion";
import { Database, BrainCircuit, LayoutDashboard } from "lucide-react";

const futurePaths = [
    {
        id: "ai",
        title: "AI Scientist",
        icon: BrainCircuit,
        color: "bg-neon-purple",
        textColor: "text-neon-purple",
        status: "Calculando redes neurais...",
    },
    {
        id: "ds",
        title: "Cientista de Dados",
        icon: Database,
        color: "bg-blue-500",
        textColor: "text-blue-500",
        status: "Processando Big Data...",
    },
    {
        id: "fe",
        title: "Front End Engineer",
        icon: LayoutDashboard,
        color: "text-cyan-400", // Usando texto colorido para este ícone
        bgColor: "bg-cyan-400", // Cor da barra
        textColor: "text-cyan-400",
        status: "Renderizando interfaces...",
    },
];

// Componente da Barra de Progresso "Glitched"
const GlitchBar = ({ color }) => (
    <div className="h-2 w-full bg-black-100 rounded-full overflow-hidden relative">
        {/* Barra de fundo estática */}
        <div className={`h-full w-1/3 ${color} opacity-20 absolute left-0`}></div>

        {/* Barra animada que vai e volta */}
        <motion.div
            className={`h-full ${color} shadow-[0_0_10px_currentColor]`}
            animate={{
                x: ["-100%", "300%"], // Move da esquerda para a direita
                width: ["10%", "30%", "10%"] // Muda de tamanho
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    </div>
);

const PathCard = ({ title, icon: Icon, color, textColor, bgColor, status, index }) => {
    const barColor = bgColor || color;
    const iconColorClass = textColor || "text-white";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-tertiary/50 border border-white/10 p-4 rounded-xl relative overflow-hidden group hover:border-white/30 transition-all"
        >

            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="flex items-center gap-4 mb-3">
                <div className={`p-2 rounded-lg bg-black-200 border border-white/10 ${iconColorClass}`}>
                    <Icon size={24} />
                </div>
                <h4 className="text-white font-bold text-lg">{title}</h4>
            </div>

            <p className="text-secondary text-sm mb-2 font-mono">{status}</p>

            <GlitchBar color={barColor} />

            {/* Tag "Locked" */}
            <div className="absolute top-2 right-2 text-[7.2px] font-mono uppercase tracking-widest text-secondary/50 border border-secondary/20 px-2 py-1 rounded">
                Target Locked
            </div>
        </motion.div>
    );
}
const ComingSoon = () => {
    return (
        <section className="py-10 px-6 max-w-4xl mx-auto relative z-10 my-20">
            {/* Container estilo "Terminal" com borda neon piscante */}
            <motion.div
                className="bg-black-100/80 backdrop-blur-sm border-2 border-neon-purple/50 p-6 md:p-8 rounded-2xl shadow-[0_0_20px_rgba(145,94,255,0.2)] relative"
                animate={{
                    boxShadow: ["0px 0px 20px rgba(145,94,255,0.2)", "0px 0px 10px rgba(145,94,255,0.1)", "0px 0px 20px rgba(145,94,255,0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {/* Título do Terminal */}
                <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                        <p className="text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase animate-pulse">
                            &gt;&gt; Incoming Transmission...
                        </p>
                        <h3 className="text-white font-black text-2xl md:text-3xl mt-2">
                            Próximos Objetivos: <span className="text-neon-purple">Pós-Graduação</span>
                        </h3>
                    </div>
                    <div className="font-mono text-xs text-red-500 animate-pulse bg-red-500/10 px-3 py-1 rounded border border-red-500/30">
                        [ STATUS: PENDENTE ]
                    </div>
                </div>

                {/* Grid dos Caminhos Futuros */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {futurePaths.map((path, index) => (
                        <PathCard key={path.id} index={index} {...path} />
                    ))}
                </div>

                <p className="text-secondary text-center text-sm mt-6 font-mono">
                    Aguardando certificação de graduação!
                </p>
            </motion.div>
        </section>
    );
};

export default ComingSoon;