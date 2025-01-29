import React from 'react';
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaTrophy, FaUsers } from "react-icons/fa";

const Education = () => {
    const coursework = [
        "Software Engineering",
        "Embedded Systems",
        "Data Structures & Algorithms",
        "Digital Signal Processing",
        "Computer Architecture",
        "Database Systems"
    ];

    const achievements = [
        {
            icon: <FaTrophy />,
            title: "University Coding Competition",
            year: "2023",
            position: "1st Runner-up"
        },
        {
            icon: <FaUsers />,
            title: "MIST Tech Club",
            role: "Core Member",
            duration: "2021-Present"
        },
        {
            icon: <FaBook />,
            title: "Dean's List",
            semesters: "Fall 2022, Spring 2023"
        }
    ];
    return (
        <section className="py-40 px-4 sm:px-8 lg:px-20 bg-white" id="education">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 uppercase">
                        Education
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Degree Information */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <FaGraduationCap className="text-4xl text-blue-800" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        B.Sc. in Electrical, Electronics & Communication Engineering
                                    </h3>
                                    <p className="text-lg text-blue-800 font-medium">
                                        Military Institute of Science & Technology (MIST)
                                    </p>
                                    <p className="text-gray-600">2020 - 2024 (Expected)</p>
                                </div>
                            </div>

                            {/* Coursework */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaBook className="text-2xl text-blue-800" />
                                    <h4 className="text-xl font-semibold text-gray-900">
                                        Relevant Coursework
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {coursework.map((course, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <FaTrophy className="text-4xl text-blue-800" />
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    Awards & Leadership
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {achievements.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-blue-800 text-2xl pt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                {item.title}
                                            </h4>
                                            {item.position && (
                                                <p className="text-blue-800">{item.position}</p>
                                            )}
                                            {item.role && (
                                                <p className="text-gray-600">
                                                    {item.role} • {item.duration}
                                                </p>
                                            )}
                                            {item.semesters && (
                                                <p className="text-gray-600">{item.semesters}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;