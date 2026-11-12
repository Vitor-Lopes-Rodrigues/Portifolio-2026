import { Code2, Database, Layout } from 'lucide-react';
import { Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import Mith from '../assets/images/Mith.png';
import GerenciarEstoque from '../assets/images/GerenciarEstoque.png';
import OdontologiaUsp from '../assets/images/OdontologiaUsp.png';
import CopaDoMundo from '../assets/images/CopaDoMundo.png';
import BraFrontEnd from '../assets/images/BrasillinkFrontEnd.png';
import HorizonFly from '../assets/images/HorizonFly.png';

// Dados independentes de idioma. O texto (nome, descrição, etc.) vem de src/constants/translations.js
// e é combinado com estes dados pela ordem (mesmo índice) dentro de cada componente.

export const navLinkIds = ["about", "experience", "projects", "contact"];

export const serviceIcons = [Code2, Database, Layout];

export const projectsMeta = [
    {
        tags: [
            { name: "Python", color: "text-yellow-400" },
            { name: "LangChain", color: "text-teal-400" },
            { name: "Gemini", color: "text-blue-400" },
            { name: "ChromaDB", color: "text-pink-400" },
            { name: "Streamlit", color: "text-red-400" },
        ],
        image: "https://placehold.co/600x400/8B5CF6/FFF?text=RAG+Voice+of+Customer",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/1IAST-Tech-Challenge-Fase4",
        highlight: "data",
    },
    {
        tags: [
            { name: "Python", color: "text-yellow-400" },
            { name: "ScikitLearn", color: "text-orange-300" },
            { name: "SHAP", color: "text-fuchsia-400" },
            { name: "Docker", color: "text-blue-600" },
        ],
        image: "https://placehold.co/600x400/F59E0B/FFF?text=Risco+Educacional",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/1IAST-Tech-Challenge-Fase3",
        highlight: "data",
    },
    {
        tags: [
            { name: "Python", color: "text-yellow-400" },
            { name: "AWS", color: "text-orange-400" },
            { name: "Airflow", color: "text-cyan-400" },
            { name: "DataEngineering", color: "text-emerald-400" },
        ],
        image: "https://placehold.co/600x400/0EA5E9/FFF?text=Data+Pipeline",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues",
        highlight: "data",
    },
    {
        tags: [
            { name: "Python", color: "text-yellow-400" },
            { name: "MachineLearning", color: "text-emerald-400" },
            { name: "ScikitLearn", color: "text-orange-300" },
        ],
        image: "https://placehold.co/600x400/22C55E/FFF?text=NPS+Model",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues",
        highlight: "data",
    },
    {
        tags: [
            { name: "Angular", color: "text-red-500" },
            { name: "C#", color: "text-purple-500" },
            { name: "SQL Server", color: "text-blue-500" },
        ],
        image: "https://placehold.co/600x400/BB1EEA/FFF?text=Projeto+Interno",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues",
    },
    {
        tags: [
            { name: "React", color: "text-cyan-400" },
        ],
        image: Mith,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Mith-Influencers",
    },
    {
        tags: [
            { name: "Angular", color: "text-red-500" },
        ],
        image: BraFrontEnd,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/BrasilInk",
    },
    {
        tags: [
            { name: "Kotlin", color: "text-orange-400" },
        ],
        image: "https://placehold.co/600x400/d97706/FFF?text=BrasilInk+API",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/BrasilInk_Api",
    },
    {
        tags: [
            { name: "Asp.Net", color: "text-indigo-400" },
            { name: "MySQL", color: "text-orange-300" },
        ],
        image: HorizonFly,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Ecommerce_HorizonFly",
    },
    {
        tags: [
            { name: "React + Vue", color: "text-emerald-400" },
        ],
        image: OdontologiaUsp,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Odontologia_USP_Igor",
    },
    {
        tags: [
            { name: "Python", color: "text-yellow-400" },
        ],
        image: GerenciarEstoque,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Odontologia_USP_Igor",
    },
    {
        tags: [
            { name: "Spring Boot", color: "text-green-500" },
            { name: "PostgreSQL", color: "text-sky-400" },
            { name: "Docker", color: "text-blue-600" },
        ],
        image: CopaDoMundo,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Projeto-Copa",
    },
];

export const experiencesMeta = [
    { iconBg: "#383E56" },
    { iconBg: "#E6DEDD" },
];

export const technologies = [
    { name: "C#", color: "text-purple-500" },
    { name: "React", color: "text-cyan-400" },
    { name: "Angular", color: "text-red-500" },
    { name: "Java", color: "text-orange-400" },
    { name: "Python", color: "text-yellow-400" },
    { name: "Kotlin", color: "text-indigo-400" },
    { name: "JavaScript", color: "text-yellow-300" },
    { name: "Node.js", color: "text-green-500" },
    { name: "SQL Server", color: "text-blue-500" },
    { name: "PostgreSQL", color: "text-sky-400" },
    { name: "MySQL", color: "text-orange-300" },
    { name: "Docker", color: "text-blue-600" },
    { name: "Git", color: "text-red-400" },
    { name: "Linux", color: "text-yellow-600" },
    { name: "AWS", color: "text-orange-400" },
    { name: "Kubernetes", color: "text-blue-500" },
    { name: "Airflow", color: "text-cyan-400" },
];


export const socialLinks = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/vitor-lopes-rodrigues",
        color: "text-blue-500",
        hoverColor: "hover:shadow-[0_0_20px_#3b82f6]",
        btnColor: "bg-blue-600"
    },
    {
        name: "WhatsApp",
        icon: MessageCircle,
        link: "https://wa.me/5511994729075",
        color: "text-green-500",
        hoverColor: "hover:shadow-[0_0_20px_#22c55e]",
        btnColor: "bg-green-600"
    },
    {
        name: "Instagram",
        icon: Instagram,
        link: "https://instagram.com/vitor_lopes_rodrigues",
        color: "text-pink-500",
        hoverColor: "hover:shadow-[0_0_20px_#ec4899]", // Brilho Rosa
        btnColor: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
    },
    {
        name: "Email",
        icon: Mail,
        link: "mailto:vitorlopes758@email.com",
        color: "text-purple-500",
        hoverColor: "hover:shadow-[0_0_20px_#a855f7]", // Brilho Roxo
        btnColor: "bg-purple-600"
    },
];
