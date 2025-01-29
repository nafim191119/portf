import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTools, FaMicrochip } from "react-icons/fa";
import { FiMonitor, FiSmartphone } from "react-icons/fi";

const Projects = () => {
    const projects = {
        web: [
            {
                title: "E-commerce Platform",
                type: "Professional Project",
                description: "Led backend development for payment gateway integration handling $500k+ monthly transactions",
                tech: ["Node.js", "React", "MongoDB", "Stripe API"],
                metrics: "40% faster checkout flow",
                links: {
                    github: "#",
                    live: "#"
                },
                image: "/ecommerce.jpg" // Replace with your image path
            },
            {
                title: "E-commerce Platform",
                type: "Professional Project",
                description: "Led backend development for payment gateway integration handling $500k+ monthly transactions",
                tech: ["Node.js", "React", "MongoDB", "Stripe API"],
                metrics: "40% faster checkout flow",
                links: {
                    github: "#",
                    live: "#"
                },
                image: "/ecommerce.jpg" // Replace with your image path
            },
        ],
        academic: [
            {
                title: "Smart Home Automation",
                type: "IoT System",
                description: "Designed prototype using Raspberry Pi + Node.js with real-time sensor monitoring",
                tech: ["Python", "IoT", "Raspberry Pi", "Firebase"],
                metrics: "95% accuracy in sensor data",
                links: {
                    github: "#",
                    demo: "#"
                },
                image: "/iot-system.jpg" // Replace with your image path
            },
            {
                title: "Smart Home Automation",
                type: "IoT System",
                description: "Designed prototype using Raspberry Pi + Node.js with real-time sensor monitoring",
                tech: ["Python", "IoT", "Raspberry Pi", "Firebase"],
                metrics: "95% accuracy in sensor data",
                links: {
                    github: "#",
                    demo: "#"
                },
                image: "/iot-system.jpg" // Replace with your image path
            },
        ]
    };

    const ProjectCard = ({ project, category }) => {
        // CUSTOMIZATION: Change category colors here
        const categoryStyles = {
            web: { iconColor: "text-blue-800", badgeColor: "badge-primary" },
            academic: { iconColor: "text-green-600", badgeColor: "badge-success" }
        };

        return (
            <motion.div
                className="card bg-white shadow-2xl hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
                {/* CUSTOMIZATION: Replace with video for dynamic previews */}
                <figure className="relative h-64 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className={`absolute top-4 right-4 badge badge-lg ${categoryStyles[category].badgeColor}`}>
                        {project.metrics}
                    </span>
                </figure>

                <div className="card-body p-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={categoryStyles[category].iconColor}>
                            {category === 'web' ? <FiMonitor /> : <FaMicrochip />}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                            {project.type}
                        </span>
                    </div>

                    {/* CUSTOMIZATION: Project title and description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                        {project.description}
                    </p>

                    {/* Tech stack badges - Update colors in tailwind.config.js */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="badge badge-outline badge-sm px-3 py-2 font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Project links - Add/remove as needed */}
                    <div className="flex items-center gap-4 mt-auto">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                className="btn btn-ghost btn-sm gap-2 text-gray-600 hover:text-blue-800"
                                aria-label="GitHub repository"
                            >
                                <FaGithub /> Code
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                className="btn btn-ghost btn-sm gap-2 text-gray-600 hover:text-blue-800"
                                aria-label="Live demo"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {project.links.demo && (
                            <a
                                href={project.links.demo}
                                className="btn btn-ghost btn-sm gap-2 text-gray-600 hover:text-green-600"
                                aria-label="Hardware demo"
                            >
                                <FiSmartphone /> Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };
    return (
        <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white" id="projects">
            <div className="max-w-7xl mx-auto">
                {/* CUSTOMIZATION: Section title */}
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 uppercase">
                    Featured Projects
                </h2>

                {/* Web Projects Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        {/* CUSTOMIZATION: Web projects icon */}
                        <FaTools className="text-4xl text-blue-800" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Web Development
                        </h3>
                    </div>

                    {/* CUSTOMIZATION: Grid layout - Change columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.web.map((project, index) => (
                            <ProjectCard
                                key={`web-${index}`}
                                project={project}
                                category="web"
                            />
                        ))}
                    </div>
                </div>

                {/* Academic Projects Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        {/* CUSTOMIZATION: Academic projects icon */}
                        <FaMicrochip className="text-4xl text-green-600" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Engineering Projects
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.academic.map((project, index) => (
                            <ProjectCard
                                key={`academic-${index}`}
                                project={project}
                                category="academic"
                            />
                        ))}
                    </div>
                </div>

                {/* GLOBAL CUSTOMIZATION TIPS 
        ----------------------------------
        1. Color Scheme: 
           - Update 'text-blue-800' and 'text-green-600' for category colors
           - Modify badge colors in tailwind.config.js
        
        2. Add New Categories:
           - Duplicate section blocks
           - Add new category in projects object
           - Create new color scheme in categoryStyles
        
        3. Animations:
           - Adjust motion.div properties
           - Change hover scale values
           - Modify viewport margins
        
        4. Responsive Breakpoints:
           - sm: 640px, md: 768px, lg: 1024px
           - Adjust grid-cols values for different layouts
        
        5. Image Handling:
           - Use WebP format for better performance
           - Add lazy loading attribute
           - Include alt text for accessibility
        */}
            </div>
        </section>
    );
};

export default Projects;