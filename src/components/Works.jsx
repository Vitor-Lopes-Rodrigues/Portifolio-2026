import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projectsMeta } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, highlight, dataAiBadge, viewCode }) => {
    const isData = highlight === "data";
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full min-h-[550px] flex flex-col justify-between border transition-colors shadow-card ${
                    isData
                        ? "border-cyan-400/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                        : "border-white/10 hover:border-neon-purple"
                }`}
            >
                <div>
                    <div className="relative w-full h-[230px]">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        {isData && (
                            <div className="absolute top-3 left-3 text-[11px] font-mono uppercase tracking-widest px-2 py-1 rounded border text-cyan-400 border-cyan-400/50 bg-black-100/80 backdrop-blur-sm">
                                {dataAiBadge}
                            </div>
                        )}

                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() => window.open(source_code_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-black border border-white/20"
                                title={viewCode}
                            >
                                <Github className="w-1/2 h-1/2 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[24px]">{name}</h3>
                        <p className="mt-2 text-secondary text-[14px] leading-[24px]">{description}</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const { t } = useLanguage();
    const projects = t.works.items.map((project, index) => ({
        ...project,
        ...projectsMeta[index],
        dataAiBadge: t.works.dataAiBadge,
        viewCode: t.works.viewCode,
    }));

    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-0">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <p className="text-secondary text-[14px] uppercase tracking-wider">{t.works.label}</p>
                <h2 className="text-white font-black text-[50px] md:text-[60px]">{t.works.title}</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    {t.works.intro}
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Works;