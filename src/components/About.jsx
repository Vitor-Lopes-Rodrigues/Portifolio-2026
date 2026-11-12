import React from "react";
import { motion } from "framer-motion";
import { serviceIcons } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import GitHubStats from "./GitHubStats";


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
    const { t } = useLanguage();
    const services = t.about.services.map((service, index) => ({ ...service, icon: serviceIcons[index] }));

    return (
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative z-0">
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}>
                <p className="text-secondary text-[14px] uppercase tracking-wider">{t.about.label}</p>
                <h2 className="text-white font-black text-[50px] md:text-[60px]">{t.about.title}</h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                {t.about.paragraph1}
                <br /><br />
                {t.about.paragraph2}
            </motion.p>


            <div className="my-12">
                <GitHubStats />
            </div>

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