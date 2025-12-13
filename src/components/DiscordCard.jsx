import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Gamepad2, Moon, Sun, Disc } from "lucide-react";

const DiscordCard = () => {
    const [status, setStatus] = useState(null);
    const userId = "331979807665553410";

    useEffect(() => {
        const fetchDiscordStatus = async () => {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
                const data = await response.json();
                setStatus(data.data);
            } catch (error) {
                console.error("Erro ao buscar status do Discord:", error);
            }
        };

        fetchDiscordStatus();
        // Atualiza a cada 60 segundos
        const interval = setInterval(fetchDiscordStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!status) return null;

    // Define a cor da bolinha de status
    const getStatusColor = (s) => {
        switch (s) {
            case "online": return "bg-green-500 shadow-[0_0_10px_#22c55e]";
            case "idle": return "bg-yellow-500 shadow-[0_0_10px_#eab308]";
            case "dnd": return "bg-red-500 shadow-[0_0_10px_#ef4444]";
            default: return "bg-gray-500";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#5865F2]/10 border border-[#5865F2]/20 p-4 rounded-xl w-full max-w-sm hover:bg-[#5865F2]/20 transition-colors group relative overflow-hidden"
        >
            {/* Header do Card */}
            <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                    <img
                        src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full border border-white/10"
                    />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border border-[#050816] ${getStatusColor(status.discord_status)}`}></div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">@{status.discord_user.username}</h4>
                    <p className="text-secondary text-xs capitalize flex items-center gap-1">
                        {status.discord_status === 'dnd' ? 'Não Perturbe' : status.discord_status}
                    </p>
                </div>
                <MessageSquare className="ml-auto text-[#5865F2] opacity-50" size={20} />
            </div>

            {/* Atividade Atual (O que está fazendo) */}
            {status.activities && status.activities.length > 0 ? (
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 mt-2">
                    <p className="text-[#5865F2] text-[10px] font-bold uppercase tracking-wider mb-1">
                        Atividade Atual
                    </p>
                    <div className="flex items-center gap-2">
                        {status.activities[0].name === "Spotify" ? <Disc size={16} className="text-green-500"/> : <Gamepad2 size={16} className="text-white"/>}
                        <span className="text-white text-xs font-medium truncate">
                        {status.activities[0].name}
                    </span>
                    </div>
                    {status.activities[0].details && (
                        <p className="text-secondary text-[10px] mt-1 truncate">
                            {status.activities[0].details}
                        </p>
                    )}
                </div>
            ) : (
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 mt-2">
                    <p className="text-secondary text-xs italic">Nenhuma atividade detectada no momento.</p>
                </div>
            )}
        </motion.div>
    );
};

export default DiscordCard;