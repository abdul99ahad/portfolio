"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Master's in Computer Science",
            school: "University of Passau, Germany",
            year: "2023 – 2026",
            details: "Pursuing advanced studies in Computer Science with a focus on software engineering and AI."
        },
        {
            degree: "B.E. in Computer Systems Engineering",
            school: "NED University of Engineering and Technology, Karachi, Pakistan",
            year: "2017 – 2021",
            details: "Bachelor's degree in Computer Systems Engineering, building strong foundations in software and hardware systems."
        },
    ];

    const certifications = [
        {
            title: "LLM Engineering: Master AI, Large Language Models & Agents",
            issuer: "Udemy",
            date: "In Progress"
        },
        {
            title: "Deep Learning Specialization",
            issuer: "Coursera · Andrew Ng",
            date: "Oct 2020"
        },
        {
            title: "Intermediate Python",
            issuer: "DataCamp",
            date: "Apr 2021"
        }
    ];

    return (
        <section id="education" aria-label="Academic Background" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="text-violet-500 w-10 h-10" />
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-violet-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0 bg-violet-500/10 p-4 rounded-lg">
                                <Award className="w-8 h-8 text-violet-400" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                                <p className="text-violet-400 font-medium mb-2">{edu.school}</p>
                                <p className="text-slate-400 text-sm">{edu.details}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-2 text-slate-500 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-16"
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <BookOpen className="text-violet-500 w-7 h-7" />
                        Certifications &amp; Courses
                    </h3>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-violet-500/30 transition-colors"
                            >
                                <div>
                                    <p className="font-semibold text-slate-100">{cert.title}</p>
                                    <p className="text-violet-400 text-sm mt-1">{cert.issuer}</p>
                                </div>
                                <span className="flex-shrink-0 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800">{cert.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
