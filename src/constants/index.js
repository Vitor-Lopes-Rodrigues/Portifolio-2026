import { Code2, Server, Database, Layout } from 'lucide-react';
import { Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import Mith from '../assets/images/Mith.png';
import GerenciarEstoque from '../assets/images/GerenciarEstoque.png';
import OdontologiaUsp from '../assets/images/OdontologiaUsp.png';
import CopaDoMundo from '../assets/images/CopaDoMundo.png';
import BraFrontEnd from '../assets/images/BrasillinkFrontEnd.png';
import HorizonFly from '../assets/images/HorizonFly.png';



export const navLinks = [
    { id: "about", title: "Sobre" },
    { id: "experience", title: "Experiência" },
    { id: "projects", title: "Projetos" },
    { id: "contact", title: "Contato" },
];

export const projects = [
    {
        name: "Sistema de Gestão de Férias",
        description:
            "Plataforma completa para RH gerenciar férias de colaboradores, incluindo aprovações de gestores, venda de dias e um gráfico de Gantt interativo.",
        tags: [
            { name: "Angular", color: "text-red-500" },
            { name: "C#", color: "text-purple-500" },
            { name: "SQL Server", color: "text-blue-500" },
        ],
        image: "https://placehold.co/600x400/BB1EEA/FFF?text=Projeto+Interno",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues",
    },
    {
        name: "MITH - Influencers",
        description:
            "Site especial para os influenciadores da marca MITH. A MITH é uma loja que se destaca pela venda de roupas fitness funcionais e estilosas.",
        tags: [
            { name: "React", color: "text-cyan-400" },
        ],
        image: Mith,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Mith-Influencers",
    },
    {
        name: "BrasilInk",
        description:
            "Aplicação Web voltada à divulgação de tatuadores e seus trabalhos artísticos.",
        tags: [
            { name: "Angular", color: "text-red-500" },
        ],
        image: BraFrontEnd,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/BrasilInk",
    },
    {
        name: "BrasilInk_Api",
        description:
            "Backend robusto da aplicação BrasilInk.",
        tags: [
            { name: "Kotlin", color: "text-orange-400" },
        ],
        image: "https://placehold.co/600x400/d97706/FFF?text=BrasilInk+API",
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/BrasilInk_Api",
    },
    {
        name: "Horizon Fly",
        description:
            "Desenvolvimento de e-commerce em Asp.Net Framework (MVC) com conexão MySQL Workbench e Front-end dinâmico.",
        tags: [
            { name: "Asp.Net", color: "text-indigo-400" },
            { name: "MySQL", color: "text-orange-300" },
        ],
        image: HorizonFly,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Ecommerce_HorizonFly",
    },
    {
        name: "Odontologia USP",
        description:
            "Criação de portfólio para um futuro formado em odontologia, desenvolvido com interface moderna.",
        tags: [
            { name: "React + Vue", color: "text-emerald-400" },
        ],
        image: OdontologiaUsp,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Odontologia_USP_Igor",
    },
    {
        name: "Gerenciamento Estoque",
        description:
            "Projeto de gerenciamento (CRUD) de estoque com segurança de login e senha.",
        tags: [
            { name: "Python", color: "text-yellow-400" },
        ],
        image: GerenciarEstoque,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Odontologia_USP_Igor",
    },
    {
        name: "Copa Do Mundo",
        description:
            "Aplicação Spring Boot com banco PostgreSQL e front-end dinâmico, totalmente containerizada.",
        tags: [
            { name: "Spring Boot", color: "text-green-500" },
            { name: "PostgreSQL", color: "text-sky-400" },
            { name: "Docker", color: "text-blue-600" },
        ],
        image: CopaDoMundo,
        source_code_link: "https://github.com/Vitor-Lopes-Rodrigues/Projeto-Copa",
    },
];

export const services = [
    { title: "Full Stack Developer", icon: Code2 },
    // { title: "Backend Specialist", icon: Server },
    { title: "Database Architect", icon: Database },
    { title: "Frontend UI/UX", icon: Layout },
];

export const experiences = [
    {
        title: "Desenvolvedor Full Stack",
        company_name: "GFT Technologies",
        date: "Out 2024 - Atual",
        iconBg: "#383E56",
        points: [
            "Desenvolvimento full stack com C# e Angular.",
            "Atuação no sistema de catálogo de desenvolvimento.",
            "Desenvolvimento de Web APls, e testes unitários (xUnit), usando linguagem c# e .NET Core(3.0+)",
            "Otimização de queries em SQL Server.",
            "Desenvolvimento web usando Angular 9+ (HTML, CSS, Typescript)"
        ],
    },


    {
        title: "Programador de Sistemas",
        company_name: "Cenpros",
        date: "Jul 2022 - Out 2024",
        iconBg: "#E6DEDD",
        points: [
            "Foco em interfaces, reestruturação de código e novos modelos de banco.",
            "Integração complexa de sistemas legados.",
            "Aprendizado contínuo de novas stacks."
        ],
    },
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