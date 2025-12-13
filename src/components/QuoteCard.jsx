import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, RefreshCw } from "lucide-react";

const QuoteCard = () => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            // API Gratuita de Citações (Tecnologia e Programação)
            const res = await fetch("https://api.quotable.io/random?tags=technology,programming");
            const data = await res.json();
            setQuote(data);
        } catch (error) {
            // Fallback caso a API falhe (comum em APIs gratuitas)
            setQuote({
                content: "First, solve the problem. Then, write the code.",
                author: "John Johnson"
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-tertiary border border-white/10 rounded-xl p-6 w-full max-w-sm flex flex-col justify-between relative group hover:border-neon-cyan/50 transition-colors"
        >
            <Quote className="text-neon-cyan absolute top-4 left-4 opacity-20" size={40} />

            <div className="relative z-10 mt-4">
                {loading ? (
                    <p className="text-secondary text-sm animate-pulse">Carregando sabedoria...</p>
                ) : (
                    <>
                        <p className="text-white text-sm md:text-md italic font-light leading-relaxed">
                            "{quote?.content}"
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-neon-cyan text-xs font-bold uppercase tracking-wider">
                        — {quote?.author}
                    </span>
                            <button
                                onClick={fetchQuote}
                                className="text-secondary hover:text-white transition-colors"
                                title="Nova Frase"
                            >
                                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default QuoteCard;