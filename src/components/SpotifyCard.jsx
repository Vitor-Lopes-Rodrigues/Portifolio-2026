import React from "react";
import { motion } from "framer-motion";
import { Music, Disc } from "lucide-react";

const SpotifyCard = () => {

    const isPlaying = true; //So pra simular algo tocando

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1DB954]/10 border border-[#1DB954]/20 p-4 rounded-xl flex items-center gap-4 w-full max-w-sm hover:bg-[#1DB954]/20 transition-colors cursor-pointer group"
            onClick={() => window.open("https://open.spotify.com/intl-pt/track/6gFQhcUOhNXaq965kYEdsH?si=5182c7e75d5c46ca", "_blank")}
        >
            {/* Capa do Álbum (Animada se estiver tocando) */}
            <div className="relative w-16 h-16 flex-shrink-0">
                {/* Imagem Placeholder */}
                <img
                    src="https://i.scdn.co/image/ab67616d00001e02fcc6c59793b1d97b89cc53ff"
                    alt="Album Cover"
                    className={`w-full h-full rounded-md object-cover shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}
                />

                <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 border border-black">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="w-3 h-3" />
                </div>
            </div>

            {/* Infos da Música */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <p className="text-[#1DB954] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                        {isPlaying ? (
                            <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                                Ouvindo agora
                            </>
                        ) : "Offline"}
                    </p>
                </div>

                <h4 className="text-white font-bold text-sm truncate group-hover:text-[#1DB954] transition-colors">
                    Poesia Acústica #2: Sobre Nós
                </h4>
                <p className="text-secondary text-xs truncate">Pineapple StormTv</p>
            </div>

            {/* Equalizador Animado (Só visual) */}
            <div className="flex gap-1 items-end h-8">
                <motion.div
                    animate={{ height: ["20%", "100%", "50%", "80%"] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1 bg-[#1DB954]/50 rounded-t-sm"
                />
                <motion.div
                    animate={{ height: ["50%", "20%", "90%", "40%"] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="w-1 bg-[#1DB954]/80 rounded-t-sm"
                />
                <motion.div
                    animate={{ height: ["80%", "40%", "20%", "100%"] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="w-1 bg-[#1DB954]/50 rounded-t-sm"
                />
            </div>
        </motion.div>
    );
};

export default SpotifyCard;