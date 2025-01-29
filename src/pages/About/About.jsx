import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaUniversity, FaToolbox, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

const About = () => {
    const strengths = [
        "Full-stack Development",
        "REST API Design",
        "Database Architecture",
        "MERN Stack",
        "System Integration",
        "Problem Solving"
    ];

    const achievements = [
        { icon: <FaCode />, metric: "3+", label: "Years Experience" },
        { icon: <FaProjectDiagram />, metric: "20+", label: "Projects Completed" },
        { icon: <FaBriefcase />, metric: "3", label: "Internships" }
    ];

    const timeline = [
        {
            year: "2023",
            title: "Senior Web Developer",
            company: "Tech Corp",
            duration: "1 Year"
        },
        {
            year: "2022",
            title: "Full Stack Intern",
            company: "StartUp Hub",
            duration: "6 Months"
        },
        {
            year: "2021",
            title: "Frontend Intern",
            company: "Digital Solutions",
            duration: "3 Months"
        }
    ];
    return (
        <section className="px-4 sm:px-8 lg:px-20 bg-white" id="about">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 uppercase">
                        About Me
                    </h2>

                    {/* Profile Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                        {/* Achievement Metrics */}
                        <div className="grid grid-cols-3 gap-4 flex-1">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="card bg-white text-center p-4 border border-gray-200 hover:border-blue-800 transition-colors"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-4xl text-blue-800 mb-2">{item.icon}</div>
                                    <div className="text-5xl font-bold text-gray-900">{item.metric}</div>
                                    <div className="text-md text-gray-600 font-semibold">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.img
                            src="..//..//../public/IMG_3133 (1)x.JPG"
                            alt="Profile"
                            className="w-68 h-[450px] rounded-full object-cover shadow-lg border-4 border-blue-800"
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Professional Summary */}
                            <div className="flex items-center gap-4">
                                <FaCode className="text-4xl text-blue-800" />
                                <h3 className="text-2xl font-semibold text-gray-900">Professional Journey</h3>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700">
                                As a passionate <span className="text-blue-800 font-medium">MERN Stack Developer</span> with
                                3+ years of professional experience and multiple internships, I specialize in building
                                scalable web applications. Currently pursuing my <span className="text-teal-600 font-medium">
                                    B.Sc. in EECE at MIST</span>, I combine software engineering expertise with hardware
                                integration capabilities to create full-stack solutions.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Key Strengths */}
                            <div className="flex items-center gap-4">
                                <FaToolbox className="text-4xl text-blue-800" />
                                <h3 className="text-2xl font-semibold text-gray-900">Technical Expertise</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {strengths.map((strength, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                                    >
                                        {strength}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Experience Timeline */}
                            <div className="mt-8 space-y-8 relative">
                                <div className="absolute left-4 h-full w-0.5 bg-gray-200 top-4"></div>
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 relative pl-10"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center absolute left-0">
                                            {item.year}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                                            <p className="text-blue-800">{item.company}</p>
                                            <p className="text-sm text-gray-500">{item.duration}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;