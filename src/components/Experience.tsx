"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const jobs = [
        {
            role: "Software Engineer",
            company: "Camunda",
            period: "Aug 2024 – Aug 2025",
            location: "Berlin, Germany · Part-Time",
            tech: ["React", "TypeScript", "Redux Toolkit", "Mocha/Chai", "GitHub Actions", "SCSS", "Docker"],
            points: [
                "Contributed to the development and maintenance of React-based Camunda Modeler, the company's flagship modeling tool used globally for BPMN, DMN, and Forms.",
                "Delivered core product features and critical fixes across 30+ bpmn.io open-source libraries using React, Redux Toolkit, Custom Hooks, and Context API, ensuring consistency, stability, and extensibility of the modeling ecosystem.",
                "Followed Test-Driven Development (TDD); wrote 300+ unit and 15+ integration tests using Mocha/Chai, achieving ~85% coverage and preventing regressions in production builds.",
                "Took ownership of independent product releases, handling QA validation, version management, and stakeholder communication with minimal supervision.",
                "Supported GitHub Actions CI workflows for PR tests and Node.js version updates, enhancing automated test reliability.",
                "Collaborated in Agile sprints with a distributed team, driving UX-focused improvements and documentation practices.",
            ],
        },
        {
            role: "Software Engineer",
            company: "Techlogix",
            period: "Sep 2021 – Sep 2023",
            location: "Pakistan · Full-Time",
            tech: ["Node.js", "NestJS", "Java", "Angular", "NgRx", "Azure", "Kafka", "PostgreSQL", "MongoDB", "Redis", "Docker"],
            points: [
                "Delivered scalable, client-facing features in a cloud-first, multi-tenant platform TMX-SD using Java, NestJS, and Node.js (Express).",
                "Built dynamic, data-driven Angular features with NgRx state management, integrating 50+ backend APIs to deliver responsive, maintainable, and high-performance user experiences.",
                "Designed and implemented RESTful and GraphQL APIs, integrating with complex relational data models on PostgreSQL.",
                "Implemented Kafka-based event streaming for real-time sync across services, reducing coupling and improving reliability.",
                "Used Azure App Service, Blob Storage, Function Apps, and serverless CRON jobs to automate 15+ cloud-based workflows.",
                "Containerized backend services using Docker to streamline deployment and improve environment consistency.",
                "Optimized SQL, NoSQL (MongoDB), and Redis databases, improving query and reporting performance for tenant-specific dashboards.",
                "Built Bitbucket CI/CD pipelines to automate deployment processes and enhance delivery efficiency.",
                "Mentored junior developers on component structure, testing, and clean code practices.",
            ],
        },
    ];

    return (
        <section id="experience" aria-label="Professional Experience" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />

                            <div
                                className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:bg-slate-800/40 transition-colors"
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100">
                                            {job.role}
                                        </h3>
                                        <p className="text-violet-400 font-medium text-lg">
                                            {job.company}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                                        <Calendar className="w-4 h-4" />
                                        {job.period}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full border border-slate-700 bg-slate-900/30 text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Always visible brief or first item? No, let's just toggle the list */}
                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-2">
                                    {expandedIndex === index ? (
                                        <>
                                            Hide Responsibilities <ChevronUp className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            View Responsibilities <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50">
                                                {job.points.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

