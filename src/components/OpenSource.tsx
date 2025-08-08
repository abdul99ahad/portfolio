"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Package, Star, GitPullRequest } from 'lucide-react';

const OpenSource = () => {
    const packages = [
        {
            name: "Camunda Modeler",
            desc: "Contributor to Camunda Modeler, the globally-used flagship tool for BPMN, DMN, and Forms modeling. Delivered core features and fixes across 30+ bpmn.io open-source libraries.",
            url: "https://github.com/camunda/camunda-modeler",
            tags: ["React", "TypeScript", "BPMN", "Redux Toolkit"],
            stats: { label: "30+ libraries", stars: "4k+" }
        },
        {
            name: "bpmn-auto-layout",
            desc: "Improved and released a major version of this open-source utility for automatic BPMN diagram layout. Used across the bpmn.io ecosystem.",
            url: "https://github.com/bpmn-io/bpmn-auto-layout",
            tags: ["Node.js", "JavaScript", "BPMN"],
            stats: { label: "Major release", stars: "200+" }
        },
        {
            name: "Carbon DS Integration",
            desc: "Integrated IBM Carbon Design System into Camunda Modeler, improving UI consistency and accessibility. Merged as a significant open-source PR.",
            url: "https://github.com/camunda/camunda-modeler/pull/4511",
            tags: ["React", "Carbon Design System", "Accessibility"],
            stats: { label: "PR #4511", stars: "Merged" }
        }
    ];

    return (
        <section id="opensource" aria-label="Open Source Contributions" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Package className="text-violet-500 w-6 h-6" />
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Open Source
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Open source contributions to the bpmn.io ecosystem and Camunda Modeler — a globally-used BPMN modeling platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {packages.map((pkg, index) => (
                        <motion.a
                            key={index}
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 group-hover:text-violet-300 transition-colors">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                                    {pkg.name}
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {pkg.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pkg.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-800 font-medium">
                                    <span className="flex items-center gap-1">
                                        <GitPullRequest className="w-3 h-3" /> {pkg.stats.label}
                                    </span>
                                    <span className="flex items-center gap-1 group-hover:text-yellow-500/80 transition-colors">
                                        <Star className="w-3 h-3" /> {pkg.stats.stars}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
