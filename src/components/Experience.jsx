import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`flex flex-col md:flex-row gap-4 mb-10 w-full ${index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'}`}
    >
        <div className="w-full md:w-1/2 bg-[#1d1836] p-6 rounded-2xl border-b-4 border-neon-purple relative hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] transition-shadow">
            <h3 className="text-white text-[24px]  font-bold">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                {experience.company_name}
            </p>
            <ul className={`mt-5 list-disc ml-5 space-y-2 ${index % 2 === 0 ? 'md:mr-5 md:ml-0 md:list-none' : ''}`}>
                {experience.points.map((point, i) => (
                    <li key={`experience-point-${i}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
            <span className="absolute -top-0 right-5 bg-neon-purple text-xs px-2 py-1 rounded">{experience.date}</span>
        </div>

        {/* Linha Central (Visual) */}
        <div className="hidden md:flex flex-col items-center justify-center w-10 relative">
            <div className="w-4 h-4 rounded-full bg-neon-purple z-10"></div>
            <div className="w-1 h-full bg-white/20 absolute"></div>
        </div>

        <div className="w-full md:w-1/2"></div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <p className="text-secondary text-center uppercase tracking-wider">Bagagem profissional!</p>
                <h2 className="text-white font-black text-center text-[40px] mb-16">Experiência Profissional.</h2>
            </motion.div>

            <div className="mt-10 flex flex-col">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;