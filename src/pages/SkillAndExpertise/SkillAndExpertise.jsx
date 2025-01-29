import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaMicrochip, FaUsers } from "react-icons/fa";

const SkillAndExpertise = () => {
    const technicalSkills = {
        // Add/remove frontend technologies:
        frontend: ["React", "HTML5", "CSS3", "JavaScript", "Redux", "Tailwind CSS"],
        // Modify backend stack:
        backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL"],
        // Update dev tools:
        tools: ["Git", "Postman", "Docker", "AWS", "Heroku"],
        // Add hardware/IoT skills:
        eece: ["Embedded Systems", "IoT", "MATLAB", "Arduino", "PCB Design"]
    };

    // Change soft skills list here:
    const softSkills = [
        "Agile Methodology",
        "Team Collaboration",
        "Problem Solving",
        "Technical Documentation",
        "Client Communication"
    ];
    return (
        <div>
            <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white" id="skills">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* CUSTOMIZATION: Change section title */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 uppercase">
                            Skills & Expertise
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                            {/* TECHNICAL SKILLS SECTION */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <div className="flex items-center gap-4">
                                    {/* CUSTOMIZATION: Change category icon */}
                                    <FaCode className="text-4xl text-blue-800" />
                                    <h3 className="text-2xl font-semibold text-gray-900">Technical Expertise</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* FRONTEND SKILLS CARD */}
                                    <div className="card bg-blue-50 p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* CUSTOMIZATION: Change sub-category icon */}
                                            <FaCode className="text-xl text-blue-800" />
                                            <h4 className="font-semibold text-gray-900">Frontend</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {technicalSkills.frontend.map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    // CUSTOMIZATION: Change badge colors
                                                    className="px-3 py-1 bg-white text-blue-800 rounded-full text-sm border border-blue-200"
                                                >
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Backend */}
                                    <div className="card bg-blue-50 p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* CUSTOMIZATION: Change sub-category icon */}
                                            <FaCode className="text-xl text-blue-800" />
                                            <h4 className="font-semibold text-gray-900">Backend</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {technicalSkills.backend.map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    // CUSTOMIZATION: Change badge colors
                                                    className="px-3 py-1 bg-white text-blue-800 rounded-full text-sm border border-blue-200"
                                                >
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div className="card bg-blue-50 p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* CUSTOMIZATION: Change sub-category icon */}
                                            <FaCode className="text-xl text-blue-800" />
                                            <h4 className="font-semibold text-gray-900">Tools</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {technicalSkills.tools.map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    // CUSTOMIZATION: Change badge colors
                                                    className="px-3 py-1 bg-white text-blue-800 rounded-full text-sm border border-blue-200"
                                                >
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* EECE */}
                                    <div className="card bg-blue-50 p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* CUSTOMIZATION: Change sub-category icon */}
                                            <FaCode className="text-xl text-blue-800" />
                                            <h4 className="font-semibold text-gray-900">EECE</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {technicalSkills.eece.map((skill, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.05 }}
                                                    // CUSTOMIZATION: Change badge colors
                                                    className="px-3 py-1 bg-white text-blue-800 rounded-full text-sm border border-blue-200"
                                                >
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                            </motion.div>

                            {/* SOFT SKILLS SECTION */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <div className="flex items-center gap-4">
                                    {/* CUSTOMIZATION: Change main icon */}
                                    <FaUsers className="text-4xl text-blue-800" />
                                    <h3 className="text-2xl font-semibold text-gray-900">Professional Skills</h3>
                                </div>

                                <div className="card bg-blue-50 p-6">
                                    <div className="space-y-4">
                                        {softSkills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-4 p-3 bg-white rounded-lg"
                                                // CUSTOMIZATION: Adjust hover animation
                                                whileHover={{ x: 5 }}
                                            >
                                                {/* CUSTOMIZATION: Change number bubble style */}
                                                <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center">
                                                    {index + 1}
                                                </div>
                                                <span className="text-gray-900 font-medium">{skill}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SkillAndExpertise;