export const translations = {
    pt: {
        nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contato" },
        navTagline: "Full Stack Dev",
        gamerMode: "Modo Gamer",

        hero: {
            greeting: "Oi, eu sou",
            subtitle: "Full Stack Developer em transição para Dados & IA. Construo desde APIs e sistemas escaláveis (C#, Angular, React) até pipelines de dados e modelos de Machine Learning (Python, AWS, Airflow).",
            ctaProjects: "Ver Projetos",
            ctaContact: "Contato",
        },

        about: {
            label: "Introdução",
            title: "Sobre mim.",
            paragraph1: "Sou formado em Desenvolvimento de Sistemas pela ETEC e em Sistemas de Informação pela Universidade São Judas Tadeu. Atuo como Full Stack Developer com foco em C#, Angular e SQL, e estou em transição para Engenharia de Dados e Ciência de Dados com IA através da pós-graduação em AI Scientist (FIAP).",
            paragraph2: "Tenho experiência sólida em desenvolvimento de aplicações web, APIs robustas, refatoração de código legado e modelagem de banco de dados. Nos últimos meses, tenho aplicado essa base construindo pipelines de dados em arquitetura Medalhão (Bronze/Silver/Gold) na AWS, com orquestração via Airflow, e modelos preditivos com Scikit-learn. Gosto de unir engenharia de software sólida com soluções orientadas a dados.",
            services: [
                { title: "Full Stack Developer" },
                { title: "Database Architect" },
                { title: "Frontend UI/UX" },
            ],
        },

        github: {
            followers: "Seguidores",
            repos: "Repos",
            follow: "Seguir",
            defaultBio: "Full Stack Developer",
            defaultLocation: "Brasil",
        },

        experience: {
            label: "Bagagem profissional!",
            title: "Experiência Profissional.",
            items: [
                {
                    title: "Desenvolvedor Full Stack",
                    company_name: "GFT Technologies",
                    date: "Out 2024 - Atual",
                    points: [
                        "Contribuição contínua nas bases de dados relacionais (SQL Server) do sistema de catálogo de desenvolvimento, com criação e ajuste de consultas e estruturas de dados que sustentam as funcionalidades da aplicação.",
                        "Desenvolvimento de Web APIs em C# e .NET Core (3.0+) responsáveis pelo acesso e pela entrega de dados às aplicações, com testes unitários em xUnit.",
                        "Construção de interfaces em Angular 9+ (HTML, CSS e TypeScript) para consulta e exibição de informações aos usuários.",
                    ],
                },
                {
                    title: "Desenvolvedor Full Stack",
                    company_name: "Cenpros LTDA (Central de Processamento de Storage)",
                    date: "Jul 2022 - Out 2024",
                    points: [
                        "Gerenciamento e otimização de bancos de dados relacionais em SQL Server e MySQL, com atuação também em PostgreSQL e Firebird.",
                        "Desenvolvimento e manutenção de aplicações front-end e back-end para projetos de pequeno, médio e grande porte.",
                        "Desenvolvimento de back-end com Kotlin e Java, com uso de Docker, Python e Node.js em soluções sob demanda.",
                    ],
                },
            ],
        },

        works: {
            label: "Meu portfólio",
            title: "Projetos.",
            intro: "Os projetos a seguir mostram minhas habilidades e experiência através de exemplos reais. Cada card possui um link direto para o repositório de código e demonstra minha capacidade de resolver problemas complexos com diferentes tecnologias.",
            dataAiBadge: "Dados & IA",
            viewCode: "Ver código no GitHub",
            items: [
                {
                    name: "Voice of Customer Intelligence com RAG",
                    description: "Sistema de Retrieval-Augmented Generation sobre avaliações de e-commerce (dataset Olist), permitindo consultas em linguagem natural com respostas embasadas em evidências reais e prevenção de alucinação por limiar de similaridade. Busca vetorial multilíngue com ChromaDB e LLM via Google Gemini (LangChain). Tech Challenge Fase 4 — Pós-graduação AI Scientist (FIAP).",
                },
                {
                    name: "Predição de Risco Educacional em Alfabetização",
                    description: "Modelo de classificação (Regressão Logística) para identificar municípios brasileiros em risco educacional a partir de indicadores do ano anterior (INEP/SAEB), com ROC-AUC de 0,84 e recall de 0,76 para a classe de risco. Inclui validação contra data leakage, interpretabilidade com SHAP e pipeline reprodutível via Docker. Tech Challenge Fase 3 — Pós-graduação AI Scientist (FIAP).",
                },
                {
                    name: "Pipeline Híbrido de Dados — Indicador de Alfabetização",
                    description: "Pipeline de engenharia de dados em arquitetura Medalhão (Bronze/Silver/Gold) na AWS, com ingestão batch e streaming, orquestração via Airflow e validação de qualidade de dados, para embasar análise de políticas públicas de alfabetização. Tech Challenge Fase 2 — Pós-graduação AI Scientist (FIAP), mai–jul 2026.",
                },
                {
                    name: "Modelo Preditivo de NPS para E-commerce",
                    description: "Modelo de classificação (Random Forest, Scikit-learn) para prever a satisfação do cliente (NPS) em cenário de e-commerce. Tech Challenge Fase 1 — Pós-graduação AI Scientist (FIAP), mar–mai 2026.",
                },
                {
                    name: "Sistema de Gestão de Férias",
                    description: "Plataforma completa para RH gerenciar férias de colaboradores, incluindo aprovações de gestores, venda de dias e um gráfico de Gantt interativo.",
                },
                {
                    name: "MITH - Influencers",
                    description: "Site especial para os influenciadores da marca MITH. A MITH é uma loja que se destaca pela venda de roupas fitness funcionais e estilosas.",
                },
                {
                    name: "BrasilInk",
                    description: "Aplicação Web voltada à divulgação de tatuadores e seus trabalhos artísticos.",
                },
                {
                    name: "BrasilInk_Api",
                    description: "Backend robusto da aplicação BrasilInk.",
                },
                {
                    name: "Horizon Fly",
                    description: "Desenvolvimento de e-commerce em Asp.Net Framework (MVC) com conexão MySQL Workbench e Front-end dinâmico.",
                },
                {
                    name: "Odontologia USP",
                    description: "Criação de portfólio para um futuro formado em odontologia, desenvolvido com interface moderna.",
                },
                {
                    name: "Gerenciamento Estoque",
                    description: "Projeto de gerenciamento (CRUD) de estoque com segurança de login e senha.",
                },
                {
                    name: "Copa Do Mundo",
                    description: "Aplicação Spring Boot com banco PostgreSQL e front-end dinâmico, totalmente containerizada.",
                },
            ],
        },

        tech: {
            kicker: "<System.Modules />",
            title: "Stack Tecnológico",
        },

        contact: {
            label: "Entre em contato",
            title: "Bora tomar um cafezinho virtual?",
            paragraph: "Estou disponível para projetos freelance, oportunidades CLT ou apenas para trocar uma ideia sobre tecnologia. Escolha sua plataforma preferida abaixo:",
            clickToAccess: "Clique para acessar",
        },

        comingSoon: {
            transmission: ">> Incoming Transmission...",
            titlePrefix: "Formação em ",
            titleHighlight: "Andamento",
            status: "[STATUS: EM ANDAMENTO]",
            introBefore: "Pós-graduando em ",
            introStrong: "AI Scientist",
            introAfter: " pela FIAP — cursando, com 4 projetos aplicados entregues:",
            fileUnlocked: "Arquivo Desbloqueado: Graduação",
            diplomaAlt: "Diploma de Graduação",
            diplomaFooter: "Base de conhecimento atualizada com sucesso.",
            completedProjects: [
                { id: "tc4", title: "Voice of Customer Intelligence com RAG", subtitle: "Tech Challenge Fase 4" },
                { id: "tc3", title: "Predição de Risco Educacional em Alfabetização", subtitle: "Tech Challenge Fase 3" },
                { id: "tc2", title: "Pipeline de Dados — Indicador de Alfabetização", subtitle: "Tech Challenge Fase 2" },
                { id: "tc1", title: "Modelo Preditivo de NPS para E-commerce", subtitle: "Tech Challenge Fase 1" },
            ],
        },

        footer: "© 2025 Vitor Lopes. Feito com React, Three.js & Tailwind.",

        widgets: {
            dashboardLabel: "Dashboard em Tempo Real",
            discord: {
                currentActivity: "Atividade Atual",
                noActivity: "Nenhuma atividade detectada no momento.",
                dnd: "Não Perturbe",
            },
            spotify: { listeningNow: "Ouvindo agora", offline: "Offline" },
            quote: { loading: "Carregando sabedoria...", newQuote: "Nova Frase" },
            nasa: { satelliteData: "Dados atualizados via satélite" },
        },
    },

    en: {
        nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
        navTagline: "Full Stack Dev",
        gamerMode: "Gamer Mode",

        hero: {
            greeting: "Hi, I'm",
            subtitle: "Full Stack Developer transitioning into Data & AI. I build everything from scalable APIs and systems (C#, Angular, React) to data pipelines and Machine Learning models (Python, AWS, Airflow).",
            ctaProjects: "View Projects",
            ctaContact: "Contact",
        },

        about: {
            label: "Introduction",
            title: "About me.",
            paragraph1: "I hold a degree in Systems Development from ETEC and in Information Systems from Universidade São Judas Tadeu. I work as a Full Stack Developer focused on C#, Angular and SQL, and I'm transitioning into Data Engineering and Data Science with AI through the AI Scientist postgraduate program (FIAP).",
            paragraph2: "I have solid experience building web applications, robust APIs, refactoring legacy code and modeling databases. In recent months I've applied that foundation to building data pipelines in a Medallion architecture (Bronze/Silver/Gold) on AWS, orchestrated with Airflow, and predictive models with Scikit-learn. I enjoy combining solid software engineering with data-driven solutions.",
            services: [
                { title: "Full Stack Developer" },
                { title: "Database Architect" },
                { title: "Frontend UI/UX" },
            ],
        },

        github: {
            followers: "Followers",
            repos: "Repos",
            follow: "Follow",
            defaultBio: "Full Stack Developer",
            defaultLocation: "Brazil",
        },

        experience: {
            label: "Professional background!",
            title: "Professional Experience.",
            items: [
                {
                    title: "Full Stack Developer",
                    company_name: "GFT Technologies",
                    date: "Oct 2024 - Present",
                    points: [
                        "Ongoing contributions to the relational databases (SQL Server) of the development catalog system, creating and tuning queries and data structures that support the application's features.",
                        "Development of Web APIs in C# and .NET Core (3.0+) that handle data access and delivery to applications, with unit tests in xUnit.",
                        "Development of Angular 9+ interfaces (HTML, CSS and TypeScript) for querying and displaying information to users.",
                    ],
                },
                {
                    title: "Full Stack Developer",
                    company_name: "Cenpros LTDA (Storage Processing Center)",
                    date: "Jul 2022 - Oct 2024",
                    points: [
                        "Management and optimization of relational databases in SQL Server and MySQL, with additional work in PostgreSQL and Firebird.",
                        "Development and maintenance of front-end and back-end applications for small, medium and large projects.",
                        "Back-end development with Kotlin and Java, using Docker, Python and Node.js in custom solutions.",
                    ],
                },
            ],
        },

        works: {
            label: "My portfolio",
            title: "Projects.",
            intro: "The projects below showcase my skills and experience through real examples. Each card has a direct link to the code repository and demonstrates my ability to solve complex problems with different technologies.",
            dataAiBadge: "Data & AI",
            viewCode: "View code on GitHub",
            items: [
                {
                    name: "Voice of Customer Intelligence with RAG",
                    description: "Retrieval-Augmented Generation system over e-commerce reviews (Olist dataset), enabling natural-language queries with answers grounded in real evidence and hallucination prevention via a similarity threshold. Multilingual vector search with ChromaDB and an LLM via Google Gemini (LangChain). Tech Challenge Phase 4 — AI Scientist Postgraduate Program (FIAP).",
                },
                {
                    name: "Educational Risk Prediction in Literacy",
                    description: "Classification model (Logistic Regression) to identify Brazilian municipalities at educational risk using prior-year indicators (INEP/SAEB), reaching a 0.84 ROC-AUC and 0.76 recall for the risk class. Includes data-leakage validation, SHAP interpretability and a reproducible pipeline via Docker. Tech Challenge Phase 3 — AI Scientist Postgraduate Program (FIAP).",
                },
                {
                    name: "Hybrid Data Pipeline — Literacy Indicator",
                    description: "Data engineering pipeline in Medallion architecture (Bronze/Silver/Gold) on AWS, with batch and streaming ingestion, Airflow orchestration and data quality validation, supporting literacy public-policy analysis. Tech Challenge Phase 2 — AI Scientist Postgraduate Program (FIAP), May–Jul 2026.",
                },
                {
                    name: "Predictive NPS Model for E-commerce",
                    description: "Classification model (Random Forest, Scikit-learn) to predict customer satisfaction (NPS) in an e-commerce scenario. Tech Challenge Phase 1 — AI Scientist Postgraduate Program (FIAP), Mar–May 2026.",
                },
                {
                    name: "Vacation Management System",
                    description: "Complete platform for HR teams to manage employee vacations, including manager approvals, day-selling and an interactive Gantt chart.",
                },
                {
                    name: "MITH - Influencers",
                    description: "Special site for MITH brand influencers. MITH is a store known for selling stylish, functional fitness apparel.",
                },
                {
                    name: "BrasilInk",
                    description: "Web application focused on promoting tattoo artists and their artistic work.",
                },
                {
                    name: "BrasilInk_Api",
                    description: "Robust backend for the BrasilInk application.",
                },
                {
                    name: "Horizon Fly",
                    description: "E-commerce development in ASP.NET Framework (MVC) with MySQL Workbench integration and a dynamic front-end.",
                },
                {
                    name: "Odontologia USP",
                    description: "Portfolio built for a soon-to-graduate dentistry student, featuring a modern interface.",
                },
                {
                    name: "Inventory Management",
                    description: "Inventory management (CRUD) project with login and password security.",
                },
                {
                    name: "World Cup",
                    description: "Spring Boot application with a PostgreSQL database and dynamic front-end, fully containerized.",
                },
            ],
        },

        tech: {
            kicker: "<System.Modules />",
            title: "Tech Stack",
        },

        contact: {
            label: "Get in touch",
            title: "Let's grab a virtual coffee?",
            paragraph: "I'm available for freelance projects, full-time opportunities, or just to talk about technology. Pick your preferred platform below:",
            clickToAccess: "Click to access",
        },

        comingSoon: {
            transmission: ">> Incoming Transmission...",
            titlePrefix: "Ongoing ",
            titleHighlight: "Education",
            status: "[STATUS: IN PROGRESS]",
            introBefore: "Postgraduate student in ",
            introStrong: "AI Scientist",
            introAfter: " at FIAP — currently enrolled, with 4 applied projects delivered:",
            fileUnlocked: "File Unlocked: Graduation",
            diplomaAlt: "Graduation Diploma",
            diplomaFooter: "Knowledge base successfully updated.",
            completedProjects: [
                { id: "tc4", title: "Voice of Customer Intelligence with RAG", subtitle: "Tech Challenge Phase 4" },
                { id: "tc3", title: "Educational Risk Prediction in Literacy", subtitle: "Tech Challenge Phase 3" },
                { id: "tc2", title: "Data Pipeline — Literacy Indicator", subtitle: "Tech Challenge Phase 2" },
                { id: "tc1", title: "Predictive NPS Model for E-commerce", subtitle: "Tech Challenge Phase 1" },
            ],
        },

        footer: "© 2025 Vitor Lopes. Made with React, Three.js & Tailwind.",

        widgets: {
            dashboardLabel: "Real-Time Dashboard",
            discord: {
                currentActivity: "Current Activity",
                noActivity: "No activity detected right now.",
                dnd: "Do Not Disturb",
            },
            spotify: { listeningNow: "Listening now", offline: "Offline" },
            quote: { loading: "Loading wisdom...", newQuote: "New Quote" },
            nasa: { satelliteData: "Data updated via satellite" },
        },
    },
};
