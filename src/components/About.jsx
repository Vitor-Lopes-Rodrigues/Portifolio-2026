import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon: Icon }) => (
    <div className='xs:w-[250px] w-full'>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                {/* Renderiza o ícone do Lucide React */}
                <Icon className='w-16 h-16 text-white' />
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative z-0">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}>
                <p className="text-secondary text-[14px] uppercase tracking-wider">Introdução</p>
                <h2 className="text-white font-black text-[50px] md:text-[60px]">Sobre mim.</h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Sou formado em Desenvolvimento de Sistemas pela ETEC e em Sistemas de Informação pela Universidade São Judas Tadeu.
                Atualmente trabalho como desenvolvedor Full Stack com foco em <strong>C#, Angular e SQL</strong>.
                <br /><br />
                Tenho experiência sólida no desenvolvimento de aplicações web, APIs robustas, refatoração de código legado e modelagem de banco de dados.
                Gosto de criar soluções que unem performance técnica com uma excelente experiência de usuário.
            </motion.p>

            {/* Grid de Serviços (Cards) */}
            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default About;