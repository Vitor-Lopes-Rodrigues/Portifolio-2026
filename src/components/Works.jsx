import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Github } from "lucide-react"; // Ícone do GitHub
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, source_code_link }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-neon-purple transition-colors shadow-card"
            >
                <div className="relative w-full h-[230px]">

                    <div className="w-full h-full object-cover rounded-2xl bg-gradient-to-br from-violet-900 to-black flex items-center justify-center">
                        <span className="text-white/20 font-bold text-4xl">{name.substring(0,1)}</span>
                    </div>


                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-black border border-white/20"
                            title="Ver código no GitHub"
                        >
                            <Github className="w-1/2 h-1/2 text-white" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px] leading-[24px]">{description}</p>
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
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-0">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <p className="text-secondary text-[14px] uppercase tracking-wider">Meu portfólio</p>
                <h2 className="text-white font-black text-[50px] md:text-[60px]">Projetos.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Os projetos a seguir mostram minhas habilidades e experiência através de exemplos reais.
                    Cada card possui um link direto para o repositório de código e demonstra minha capacidade
                    de resolver problemas complexos com diferentes tecnologias.
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