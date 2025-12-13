// src/constants/index.js
import { Code2, Server, Database, Layout, Smartphone } from 'lucide-react';

export const navLinks = [
    { id: "about", title: "Sobre" },
    { id: "experience", title: "Experiência" },
    { id: "projects", title: "Projetos" },
    { id: "contact", title: "Contato" },
];

export const services = [
    { title: "Full Stack Developer", icon: Code2 },
    { title: "Backend Specialist", icon: Server },
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
            "Criação de Web APIs robustas e testes unitários com xUnit.",
            "Otimização de queries em SQL Server."
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
    { name: "React", color: "text-blue-400" },
    { name: "Angular", color: "text-red-500" },
    { name: "C#", color: "text-purple-500" },
    { name: "Node.js", color: "text-green-500" },
    { name: "SQL", color: "text-yellow-500" },
    { name: "Docker", color: "text-blue-600" },
];