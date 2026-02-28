"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Bot, Sparkles, Minimize2, X } from 'lucide-react';

interface Message {
    id: string;
    type: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

const PortfolioAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowGreeting(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) setShowGreeting(false);
    }, [isOpen]);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            text: "Hi there! I'm Abdul's AI Portfolio Assistant. Ask me anything about his experience at BMW Group or Camunda, his tech stack, open-source contributions, or professional background!",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // ── Experience Data (all 3 roles) ──────────────────────────────────────
    const experienceData = [
        {
            company: "BMW Group",
            role: "Software Engineer Intern",
            period: "Feb 2025 – Present",
            aliases: ["bmw", "bmw group", "batman", "current", "latest", "intern", "battery", "analytics", "hvs", "munich"],
            points: [
                "Contributing to BATMAN, an internal analytics platform for High Voltage Battery (HVS) diagnostics, covering SOH, SOC, symmetry analysis, VIN/VAN-level tracking, CDC, and MDR reporting.",
                "Optimised a critical GraphQL query powering Single Entity Analysis, reducing execution time from 5 minutes to 10–15 seconds.",
                "Delivered new features end-to-end: React components, data visualisations, and SQL queries via AWS Athena against large-scale S3 datasets.",
                "Performed systematic code refactoring and performance optimisation across the monorepo.",
                "Introduced conventional commits to standardise the team's Git workflow and improve release traceability."
            ]
        },
        {
            company: "Camunda",
            role: "Software Engineer (Part-Time)",
            period: "Aug 2024 – Aug 2025",
            aliases: ["camunda", "bpmn", "modeler", "part-time", "parttime", "berlin", "bpmn.io"],
            points: [
                "Contributed to Camunda Modeler, the globally-used flagship tool for BPMN, DMN, and Forms modeling.",
                "Delivered features and fixes across 30+ bpmn.io open-source libraries using React, Redux Toolkit, Custom Hooks, and Context API.",
                "Applied TDD; wrote 300+ unit and 15+ integration tests with Mocha/Chai, achieving ~85% coverage.",
                "Took ownership of independent product releases, handling QA validation, version management, and stakeholder communication.",
                "Supported GitHub Actions CI workflows for PR tests and Node.js version updates."
            ]
        },
        {
            company: "Techlogix",
            role: "Software Engineer",
            period: "Sep 2021 – Sep 2023",
            aliases: ["techlogix", "tmx", "kafka", "azure", "angular", "nestjs", "pakistan"],
            points: [
                "Delivered scalable, client-facing features in a cloud-first, multi-tenant platform TMX-SD using Java, NestJS, and Node.js.",
                "Built Angular features with NgRx state management, integrating 50+ backend APIs.",
                "Designed RESTful and GraphQL APIs integrated with PostgreSQL data models.",
                "Implemented Kafka-based event streaming for real-time service sync.",
                "Used Azure App Service, Blob Storage, Function Apps, and serverless CRON jobs to automate 15+ cloud workflows.",
                "Containerized services with Docker and built Bitbucket CI/CD pipelines."
            ]
        }
    ];

    // ── Project Data (all 3 projects) ──────────────────────────────────────
    const projectData = [
        {
            title: "Camunda Modeler – Carbon Design System Integration",
            aliases: ["camunda modeler", "carbon design", "modeler pr", "carbon", "modeler project", "pr 4511", "#4511"],
            desc: "an open-source contribution integrating IBM Carbon Design System into Camunda Modeler, improving UI consistency and accessibility.",
            tech: "React, Node.js, Carbon Design System, TypeScript",
            highlights: [
                "Integrated IBM's Carbon Design System into Camunda Modeler's UI.",
                "Improved accessibility and visual consistency across the platform.",
                "Merged PR: github.com/camunda/camunda-modeler/pull/4511"
            ]
        },
        {
            title: "bpmn-auto-layout",
            aliases: ["bpmn-auto-layout", "bpmn layout", "auto layout", "bpmn io", "bpmn.io"],
            desc: "an open-source utility for automatic BPMN diagram layout across the bpmn.io ecosystem. Abdul improved and released a major version.",
            tech: "Node.js, JavaScript, BPMN",
            highlights: [
                "Improved and released a major version of bpmn-auto-layout.",
                "Enables automatic layout generation for complex BPMN diagrams.",
                "Published at: github.com/bpmn-io/bpmn-auto-layout"
            ]
        },
        {
            title: "React Chat App",
            aliases: ["chat app", "react chat", "websocket", "chat", "socket"],
            desc: "a real-time chat application with bi-directional communication via WebSockets.",
            tech: "React, Node.js, Express.js, WebSockets (Socket.io)",
            highlights: [
                "Real-time bi-directional communication via WebSockets.",
                "User rooms, live messaging, and presence indicators.",
                "Available at: github.com/abdul99ahad/react-chat-app"
            ]
        }
    ];

    // ── Open Source Contributions ──────────────────────────────────────────
    const openSourceData = [
        {
            name: "Camunda Modeler",
            aliases: ["camunda modeler", "camunda open source", "bpmn modeler"],
            desc: "Contributor to Camunda Modeler, globally used for BPMN, DMN, and Forms modeling. Delivered features and fixes across 30+ bpmn.io open-source libraries.",
            url: "https://github.com/camunda/camunda-modeler",
            stats: "30+ libraries, ~85% test coverage"
        },
        {
            name: "bpmn-auto-layout",
            aliases: ["bpmn-auto-layout", "bpmn layout"],
            desc: "Improved and released a major version of this open-source utility for automatic BPMN diagram layout across the bpmn.io ecosystem.",
            url: "https://github.com/bpmn-io/bpmn-auto-layout",
            stats: "Major version released"
        }
    ];

    // ── Skills Data ────────────────────────────────────────────────────────
    const skillsData = {
        frontend: ["React.js", "Next.js", "Angular", "NgRx", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3/SCSS", "Tailwind CSS", "Material UI", "Bootstrap"],
        backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL", "Apache Kafka", "JWT", "OAuth2"],
        database: ["PostgreSQL", "MongoDB", "Redis", "SQL Server", "Prisma ORM", "Azure", "AWS (Athena, S3, EC2)", "Firebase"],
        tools: ["Docker", "GitHub Actions", "Git", "Jest / Mocha / Chai", "Agile / TDD", "Webpack", "Vite", "Jira", "Confluence"]
    };

    // ── Education Data ─────────────────────────────────────────────────────
    const educationData = [
        {
            degree: "Master's in Computer Science",
            school: "University of Passau, Germany",
            year: "2023 – 2026"
        },
        {
            degree: "B.E. in Computer Systems Engineering",
            school: "NED University of Engineering and Technology, Karachi, Pakistan",
            year: "2017 – 2021"
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const generateResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // ── Greetings ──────────────────────────────────────────────────────
        if (lowerInput.match(/^(hi|hello|hey|greetings|howdy|sup|yo)[\s!?]*$/)) {
            return "Hello! Great to have you here. I can tell you about Abdul's experience at BMW Group or Camunda, his open-source contributions, tech stack, or education. What would you like to know?";
        }

        // ── Identity ───────────────────────────────────────────────────────
        if (lowerInput.includes('who are you') || lowerInput.includes('your name') || lowerInput.includes('about yourself') || lowerInput.includes('intro')) {
            return "I'm Abdul's AI Portfolio Assistant! I can help you explore his 4+ years of professional experience, technical skills, projects, open-source contributions, and education. Try asking: 'What is your tech stack?', 'Tell me about BMW', or 'What open source work have you done?'";
        }

        // ── About / Bio ────────────────────────────────────────────────────
        if (lowerInput.includes('about') && (lowerInput.includes('abdul') || lowerInput.includes('you') || lowerInput.includes('yourself'))) {
            return "Abdul Ahad is a Software Engineer with 4+ years of experience building scalable, enterprise-grade web applications. He is currently a Software Engineer Intern at BMW Group, working on BATMAN — an internal analytics platform for High Voltage Battery diagnostics. Previously, he was a Software Engineer at Camunda, contributing to the globally-used Camunda Modeler and 30+ bpmn.io open-source libraries. Outside of work, he is actively learning about LLMs, RAG, and AI Architecture. He is based in Passau, Germany and is pursuing a Master's in Computer Science.";
        }

        // ── Open Source ────────────────────────────────────────────────────
        if (lowerInput.includes('open source') || lowerInput.includes('github') || lowerInput.includes('contribution') || lowerInput.includes('bpmn')) {
            for (const pkg of openSourceData) {
                if (pkg.aliases.some(a => lowerInput.includes(a))) {
                    return `**${pkg.name}**: ${pkg.desc} Stats: ${pkg.stats}. Check it out: ${pkg.url}`;
                }
            }
            return `Abdul has contributed to open source at Camunda: **Camunda Modeler** (30+ bpmn.io libraries, ~85% test coverage) and **bpmn-auto-layout** (released a major version). He also integrated Carbon Design System into Camunda Modeler (PR #4511). Ask about either project to learn more!`;
        }

        // ── Specific Package check ─────────────────────────────────────────
        for (const pkg of openSourceData) {
            if (pkg.aliases.some(a => lowerInput.includes(a))) {
                return `**${pkg.name}**: ${pkg.desc} Stats: ${pkg.stats}. Check it out: ${pkg.url}`;
            }
        }

        // ── Specific Company / Experience ──────────────────────────────────
        for (const exp of experienceData) {
            if (exp.aliases.some(alias => lowerInput.includes(alias))) {
                return `At **${exp.company}** as *${exp.role}* (${exp.period}): ${exp.points.join(" ")}`;
            }
        }

        // ── Specific Project ───────────────────────────────────────────────
        for (const proj of projectData) {
            if (proj.aliases.some(alias => lowerInput.includes(alias))) {
                return `**${proj.title}** is ${proj.desc} Built using: ${proj.tech}. Key highlights: ${proj.highlights.join(" | ")}`;
            }
        }

        // ── Broad: Experience / Career ─────────────────────────────────────
        if (lowerInput.includes('experience') || lowerInput.includes('history') || lowerInput.includes('career') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('background')) {
            return "Abdul has 4+ years in software development. His career path: Software Engineer Intern at BMW Group (Feb 2025–Present) → Software Engineer (Part-Time) at Camunda (Aug 2024–Aug 2025) → Software Engineer at Techlogix (Sep 2021–Sep 2023). He is based in Passau, Germany and is pursuing a Master's in Computer Science at the University of Passau.";
        }

        // ── Broad: Projects ────────────────────────────────────────────────
        if (lowerInput.includes('project') || lowerInput.includes('built') || lowerInput.includes('portfolio') || lowerInput.includes('work sample')) {
            return "Abdul has worked on 3 key projects: 1) Camunda Modeler – Carbon Design System Integration (open-source PR #4511), 2) bpmn-auto-layout – major version release for the bpmn.io ecosystem, 3) React Chat App – real-time WebSocket chat application. Which would you like to explore?";
        }

        // ── Skills / Tech Stack ────────────────────────────────────────────
        if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('language') || lowerInput.includes('framework') || lowerInput.includes('tool')) {
            return `Abdul's full tech stack: **Frontend**: ${skillsData.frontend.join(', ')} | **Backend & APIs**: ${skillsData.backend.join(', ')} | **Database & Cloud**: ${skillsData.database.join(', ')} | **Tools & Practices**: ${skillsData.tools.join(', ')}`;
        }

        // ── Specific skill queries ─────────────────────────────────────────
        if (lowerInput.includes('react')) return "Abdul has extensive React.js experience, including delivering features for Camunda Modeler with Redux Toolkit, Custom Hooks, and Context API. He also uses React at BMW Group for the BATMAN analytics platform.";
        if (lowerInput.includes('angular')) return "Abdul built data-driven Angular features with NgRx state management at Techlogix, integrating 50+ backend APIs for the TMX-SD multi-tenant platform.";
        if (lowerInput.includes('graphql')) return "Abdul uses GraphQL at BMW Group (AWS Athena-backed queries for BATMAN) and at Techlogix where he designed GraphQL APIs integrated with PostgreSQL data models.";
        if (lowerInput.includes('node') || lowerInput.includes('express')) return "Abdul builds REST APIs with Node.js and Express.js, used across Techlogix projects, the React Chat App, and open-source work on bpmn-auto-layout. He also uses NestJS for scalable backend architecture.";
        if (lowerInput.includes('mongodb') || lowerInput.includes('postgresql') || lowerInput.includes('database')) return "Abdul works with PostgreSQL (TMX-SD at Techlogix, SQL queries via AWS Athena at BMW), MongoDB, Redis, and SQL Server. He also uses Prisma ORM for type-safe database access.";
        if (lowerInput.includes('typescript')) return "TypeScript is one of Abdul's primary languages. He uses it for type-safe frontend (React + Redux Toolkit) and backend (NestJS, Node.js) development, ensuring maintainable, scalable code.";
        if (lowerInput.includes('docker') || lowerInput.includes('devops') || lowerInput.includes('ci') || lowerInput.includes('github actions')) return "Abdul uses Docker to containerize backend services, and GitHub Actions for CI/CD workflows. He also worked with Bitbucket CI/CD pipelines at Techlogix.";
        if (lowerInput.includes('test') || lowerInput.includes('tdd') || lowerInput.includes('mocha') || lowerInput.includes('jest')) return "Abdul practices TDD and wrote 300+ unit tests and 15+ integration tests using Mocha/Chai at Camunda, achieving ~85% test coverage. He also writes unit tests in Jest.";
        if (lowerInput.includes('kafka') || lowerInput.includes('azure') || lowerInput.includes('aws')) return "Abdul has worked with Apache Kafka for event streaming at Techlogix, Azure (App Service, Blob Storage, Function Apps) for cloud workflows, and AWS (Athena, S3) at BMW Group for large-scale data querying.";

        // ── Education ──────────────────────────────────────────────────────
        if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('university') || lowerInput.includes('study') || lowerInput.includes('qualification') || lowerInput.includes('master') || lowerInput.includes('bachelor')) {
            const eduList = educationData.map(e => `${e.degree} from ${e.school} (${e.year})`).join(' | ');
            return `Abdul's education: ${eduList}. He is currently pursuing his Master's in Computer Science at the University of Passau, Germany, while working as a Software Engineer Intern at BMW Group.`;
        }

        // ── Contact / Hire ─────────────────────────────────────────────────
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach') || lowerInput.includes('available')) {
            return "Abdul is open to new opportunities! You can reach him via the Contact section on this portfolio, connect on LinkedIn: linkedin.com/in/abdul-ahad, or check his GitHub: github.com/abdul99ahad";
        }

        // ── Resume / CV ────────────────────────────────────────────────────
        if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('download')) {
            return "You can download Abdul's latest CV (Abdul_Ahad_CV.pdf) from the navigation bar or the Contact section of this portfolio.";
        }

        // ── Social Links ───────────────────────────────────────────────────
        if (lowerInput.includes('linkedin') || lowerInput.includes('social') || lowerInput.includes('profile')) {
            return "Find Abdul online: GitHub → github.com/abdul99ahad | LinkedIn → linkedin.com/in/abdul-ahad";
        }

        // ── Why Hire ───────────────────────────────────────────────────────
        if (lowerInput.includes('why hire') || lowerInput.includes('strength') || lowerInput.includes('value') || lowerInput.includes('best at') || lowerInput.includes('why you')) {
            return "You should hire Abdul because he brings both strong engineering fundamentals and real-world impact — from optimising a GraphQL query at BMW Group (5 min → 10 sec) to contributing features across 30+ open-source bpmn.io libraries with ~85% test coverage at Camunda. He is disciplined about TDD, clean code, and documentation, and thrives in both team and independent settings.";
        }

        // ── Default fallback ───────────────────────────────────────────────
        return "I'm still learning! Try asking about 'Experience', 'Projects', 'Tech Stack', 'Open Source', 'Education', or something specific like 'Tell me about Camunda' or 'What did Abdul do at BMW?'";
    };

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            type: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate thinking delay
        setTimeout(() => {
            const responseText = generateResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const quickAsks = ["Experience", "Projects", "Skills", "Open Source", "Contact"];

    const handleQuickAsk = (text: string) => {
        setInputValue(text);
        const userMsg: Message = {
            id: Date.now().toString(),
            type: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            const responseText = generateResponse(text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            {/* Greeting Bubble */}
            <AnimatePresence>
                {!isOpen && showGreeting && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 max-w-[280px]"
                    >
                        <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-br-sm shadow-xl border border-slate-700/50 flex items-start gap-3 relative before:content-[''] before:absolute before:bottom-[-6px] before:right-6 before:w-3 before:h-3 before:bg-slate-800 before:border-r before:border-b before:border-slate-700/50 before:rotate-45">
                            <div className="flex-1">
                                <p className="text-sm font-medium">👋 Hi there! I can help you explore Abdul's projects and experience.</p>
                            </div>
                            <button
                                onClick={() => setShowGreeting(false)}
                                className="p-1 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-violet-600 text-white'
                    }`}
            >
                <MessageSquare className="w-6 h-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-[90vw] md:w-[380px] h-[600px] max-h-[85vh] bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 backdrop-blur-xl"
                        style={{ boxShadow: '0 0 50px -12px rgba(0,0,0,0.5)' }}
                    >
                        <div className="p-4 border-b border-slate-700/50 bg-slate-800/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center relative">
                                    <Bot className="w-6 h-6 text-white" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-100">Assistant</h3>
                                    <p className="text-xs text-violet-400 flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" /> Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white"
                            >
                                <Minimize2 className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${msg.type === 'user'
                                            ? 'bg-violet-600 text-white rounded-tr-sm'
                                            : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-tl-sm'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                                        <span className="text-[10px] opacity-50 mt-1 block px-1">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 border border-slate-700/50 p-3 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                                        <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce delay-75"></span>
                                        <span className="w-2 h-2 bg-violet-500/50 rounded-full animate-bounce delay-150"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {messages.length < 4 && !isTyping && (
                            <div className="px-4 pb-2">
                                <p className="text-xs text-slate-500 mb-2 pl-1">Suggested topics:</p>
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                                    {quickAsks.map(qa => (
                                        <button
                                            key={qa}
                                            onClick={() => handleQuickAsk(qa)}
                                            className="whitespace-nowrap px-3 py-1.5 bg-slate-800/50 border border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/10 rounded-full text-xs text-slate-300 transition-colors"
                                        >
                                            {qa}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700/50 bg-slate-800/30">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50 transition-colors placeholder:text-slate-600"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors shadow-lg shadow-violet-600/20"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioAssistant;

