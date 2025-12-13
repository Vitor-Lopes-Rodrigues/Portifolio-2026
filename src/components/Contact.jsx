import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto relative z-0 flex flex-col items-center justify-center min-h-[60vh]">

            {/* Título e Texto */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <p className="text-secondary text-[14px] uppercase tracking-wider">Entre em contato</p>
                <h3 className="text-white font-black text-[40px] md:text-[50px]">Vamos conversar.</h3>
                <p className="mt-4 text-secondary text-[16px] max-w-xl mx-auto leading-[30px]">
                    Estou disponível para projetos freelance, oportunidades CLT ou apenas para trocar uma ideia sobre tecnologia.
                    Escolha sua plataforma preferida abaixo:
                </p>
            </motion.div>

            {/* Grid de Redes Sociais Centralizado */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex flex-col items-center gap-4 p-8 rounded-2xl bg-tertiary border border-white/5 transition-all duration-300 group cursor-pointer ${social.hoverColor} hover:-translate-y-2 hover:bg-[#1a1440]`}
                    >
                        <div className={`w-16 h-16 rounded-full flex justify-center items-center ${social.btnColor} text-white shadow-lg`}>
                            <social.icon size={32} />
                        </div>
                        <div className="text-center">
                            <h4 className="text-white font-bold text-xl mb-1">{social.name}</h4>
                            <p className="text-secondary text-sm">Clique para acessar</p>
                        </div>
                    </motion.a>
                ))}
            </div>

        </section>
    );
};

export default Contact;