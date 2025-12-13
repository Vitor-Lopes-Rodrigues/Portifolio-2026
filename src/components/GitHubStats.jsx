import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Users, FolderGit2, MapPin } from "lucide-react";

const GitHubStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/Vitor-Lopes-Rodrigues");
                const data = await response.json();
                setStats(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados do GitHub:", error);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex justify-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-neon-purple"></div>
            </div>
        );
    }

    if (!stats) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 max-w-3xl mx-auto bg-black-100/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(145,94,255,0.15)] relative overflow-hidden group"
        >
            {/* Efeito de brilho ao passar o mouse */}
            <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Foto do Perfil (Vem da API) */}
                <div className="relative">
                    <img
                        src={stats.avatar_url}
                        alt="GitHub Profile"
                        className="w-24 h-24 rounded-full border-2 border-neon-purple shadow-[0_0_15px_#915eff]"
                    />
                    <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border border-black animate-pulse" title="Status: Online"></div>
                </div>

                {/* Informações */}
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <Github className="text-white" size={20} />
                        <h3 className="text-white font-bold text-2xl">@{stats.login}</h3>
                    </div>
                    <p className="text-secondary text-sm mb-4">
                        "{stats.bio || "Full Stack Developer"}"
                    </p>

                    {/* Grid de Estatísticas */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                        <div className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg border border-white/5">
                            <FolderGit2 size={16} className="text-neon-cyan" />
                            <span className="text-white font-bold">{stats.public_repos}</span>
                            <span className="text-secondary text-xs uppercase">Repos</span>
                        </div>
                        <div className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg border border-white/5">
                            <Users size={16} className="text-green-400" />
                            <span className="text-white font-bold">{stats.followers}</span>
                            <span className="text-secondary text-xs uppercase">Seguidores</span>
                        </div>
                        <div className="flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg border border-white/5">
                            <MapPin size={16} className="text-red-400" />
                            <span className="text-secondary text-xs">{stats.location || "Brasil"}</span>
                        </div>
                    </div>
                </div>

                {/* Botão de Ação */}
                <a
                    href={stats.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-neon-purple to-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    Seguir
                </a>
            </div>
        </motion.div>
    );
};

export default GitHubStats;