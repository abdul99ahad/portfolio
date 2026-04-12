// ─────────────────────────────────────────────────────────────────────────────
// Centralized JSON-LD Structured Data
// Follows schema.org specifications for Person, WebSite, and CreativeWork
// ─────────────────────────────────────────────────────────────────────────────

const BASE_URL = "https://abdulahad.netlify.app";

// ── 1. Person Schema ───────────────────────────────────────────────────────────
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Abdul Ahad",
    givenName: "Abdul",
    familyName: "Ahad",
    jobTitle: "Software Engineer",
    description:
        "Software Engineer with 4+ years of experience specializing in React, TypeScript, Node.js, Angular, and GraphQL. Currently Software Engineer Intern at BMW Group. Previously contributed to Camunda Modeler and 30+ bpmn.io open-source libraries at Camunda.",
    url: BASE_URL,
    email: "abdul9ahad@gmail.com",
    telephone: "+49-15209189253",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Passau",
        addressRegion: "Bavaria",
        addressCountry: "DE",
    },
    sameAs: [
        "https://github.com/abdul99ahad",
        "https://linkedin.com/in/abdul99ahad",
    ],
    knowsAbout: [
        "React.js",
        "Next.js",
        "Angular",
        "NgRx",
        "Redux Toolkit",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "NestJS",
        "Express.js",
        "GraphQL",
        "Apache Kafka",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "GitHub Actions",
        "AWS",
        "Azure",
        "BPMN",
        "Test-Driven Development",
        "Agile",
        "Enterprise Web Applications",
        "Open Source Development",
    ],
    worksFor: {
        "@type": "Organization",
        name: "BMW Group",
    },
    alumniOf: {
        "@type": "EducationalOrganization",
        name: "NED University of Engineering and Technology",
    },
};

// ── 2. WebSite Schema ──────────────────────────────────────────────────────────
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Abdul Ahad — Software Engineer Portfolio",
    url: BASE_URL,
    description:
        "Professional portfolio of Abdul Ahad, a Software Engineer specializing in React, TypeScript, Node.js, Angular, GraphQL, and enterprise web application development. Currently at BMW Group.",
    inLanguage: "en-US",
    author: {
        "@id": `${BASE_URL}/#person`,
    },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
};

// ── 3. Projects — ItemList of CreativeWork ────────────────────────────────────
export const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#projects`,
    name: "Abdul Ahad's Software Projects",
    description:
        "A collection of enterprise-grade web applications and open-source contributions by Abdul Ahad.",
    numberOfItems: 3,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            item: {
                "@type": "SoftwareSourceCode",
                name: "Camunda Modeler — Carbon Design System Integration",
                description:
                    "Integrated IBM Carbon Design System into Camunda Modeler, improving UI consistency and accessibility. Open-source PR #4511.",
                url: "https://github.com/camunda/camunda-modeler/pull/4511",
                codeRepository: "https://github.com/camunda/camunda-modeler",
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: ["Camunda", "BPMN", "React", "Carbon Design System", "TypeScript", "Open Source"],
                programmingLanguage: ["TypeScript", "JavaScript"],
                license: "https://opensource.org/licenses/MIT",
            },
        },
        {
            "@type": "ListItem",
            position: 2,
            item: {
                "@type": "SoftwareSourceCode",
                name: "bpmn-auto-layout",
                description:
                    "Open-source utility for automatic BPMN diagram layout across the bpmn.io ecosystem. Abdul improved and released a major version.",
                url: "https://github.com/bpmn-io/bpmn-auto-layout",
                codeRepository: "https://github.com/bpmn-io/bpmn-auto-layout",
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: ["BPMN", "Node.js", "JavaScript", "Open Source", "bpmn.io"],
                programmingLanguage: ["JavaScript"],
                license: "https://opensource.org/licenses/MIT",
            },
        },
        {
            "@type": "ListItem",
            position: 3,
            item: {
                "@type": "CreativeWork",
                name: "React Chat App",
                description:
                    "Real-time chat application with bi-directional communication via WebSockets. Built with React, Node.js, and Express.js.",
                url: "https://github.com/abdul99ahad/react-chat-app",
                creator: { "@id": `${BASE_URL}/#person` },
                keywords: ["React", "Node.js", "Express.js", "WebSockets", "Real-time"],
                programmingLanguage: ["JavaScript"],
            },
        },
    ],
};
