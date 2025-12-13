import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Info } from "lucide-react";

const NasaCard = () => {
    const [apod, setApod] = useState(null);

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
                const data = await res.json();
                setApod(data);
            } catch (error) {
                console.error("Erro NASA API:", error);
            }
        };
        fetchApod();
    }, []);

    if (!apod) return null; // Não mostra nada se falhar ou estiver carregando

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black-100/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden w-full max-w-sm hover:border-neon-purple/50 transition-colors group"
        >
            <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => window.open(apod.hdurl, "_blank")}>
                {apod.media_type === "image" ? (
                    <img
                        src={apod.url}
                        alt={apod.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                        <Rocket className="text-white animate-bounce" />
                    </div>
                )}

                <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-[10px] text-white font-mono border border-white/20">
                    NASA APOD
                </div>
            </div>

            <div className="p-4">
                <h4 className="text-white font-bold text-sm mb-1 truncate" title={apod.title}>
                    {apod.title}
                </h4>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-secondary text-xs">{apod.date}</span>
                </div>

                <p className="text-secondary text-xs line-clamp-3 leading-relaxed">
                    {apod.explanation}
                </p>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
                    <Info size={14} className="text-neon-cyan" />
                    <span className="text-[10px] text-neon-cyan uppercase tracking-wider">
                Dados atualizados via satélite
            </span>
                </div>
            </div>
        </motion.div>
    );
};

export default NasaCard;