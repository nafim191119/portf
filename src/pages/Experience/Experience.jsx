import React from 'react';
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaRegClock, FaChartLine, FaCircle } from "react-icons/fa";

const Experience = () => {
    const experiences = {
        professional: [
            {
                company: "Tech Innovators Inc",
                role: "Senior MERN Developer",
                type: "Full-time",
                duration: "Jan 2022 - Present",
                tasks: [
                    "Led team of 5 developers in building enterprise SaaS platform",
                    "Implemented Redis caching to reduce API latency by 40%",
                    "Migrated legacy system to microservices architecture"
                ],
                tools: ["Node.js", "React", "AWS", "Docker", "Redis"],
                icon: <FaBriefcase />,
                // CUSTOMIZE: Add optional metrics
                metrics: "Improved system performance by 65%",
                // CUSTOMIZE: Add company logo (path to image)
                logo: "/company-logo.png"
            }
        ],
        internships: [
            {
                company: "StartUp Hub",
                role: "Full Stack Intern",
                type: "Internship",
                duration: "Jun 2021 - Dec 2021",
                tasks: [
                    "Developed REST APIs for mobile app backend",
                    "Optimized MongoDB queries reducing load time by 30%",
                    "Implemented CI/CD pipeline using GitHub Actions"
                ],
                tools: ["Express.js", "MongoDB", "JWT", "Postman"],
                icon: <FaLaptopCode />,
                // CUSTOMIZE: Add recommendation link
                recommendation: "#"
            }
        ]
    };

    const ExperienceItem = ({ experience }) => {
        // CUSTOMIZE: Change color scheme
        const COLORS = {
            professional: "blue-800",
            internship: "green-600",
            freelance: "purple-600"
        };

        return (
            <motion.div
                className="card bg-white shadow-lg hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
                <div className="card-body p-6">
                    <div className="flex items-start gap-4 mb-4">
                        {/* CUSTOMIZE: Change icon size/color */}
                        <span className={`text-2xl text-${COLORS.professional} pt-1`}>
                            {experience.logo ? (
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    className="w-12 h-12 object-contain"
                                />
                            ) : experience.icon}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                                <span>{experience.company}</span>
                                <span>•</span>
                                <span>{experience.type}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <FaRegClock className="text-xs" />
                                    {experience.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CUSTOMIZE: Add/remove metrics display */}
                    {experience.metrics && (
                        <div className="badge badge-primary badge-lg mb-4">
                            <FaChartLine className="mr-2" /> {experience.metrics}
                        </div>
                    )}

                    <ul className="space-y-2 mb-4">
                        {experience.tasks.map((task, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-2 text-gray-700"
                            >
                                {/* CUSTOMIZE: Change bullet point style */}
                                <span className={`text-${COLORS.professional} mt-1`}>▹</span>
                                {task}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                        {experience.tools.map((tool, index) => (
                            <span
                                key={index}
                                // CUSTOMIZE: Change badge style
                                className="badge badge-outline badge-sm px-3 py-1.5 font-medium hover:bg-blue-50"
                            >
                                {tool}
                            </span>
                        ))}
                        {/* CUSTOMIZE: Add recommendation link */}
                        {experience.recommendation && (
                            <a
                                href={experience.recommendation}
                                className="badge badge-primary badge-sm px-3 py-1.5 hover:bg-blue-900"
                            >
                                Recommendation ↗
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };
    return (
        <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white" id="experience">
            <div className="max-w-7xl mx-auto">
                {/* CUSTOMIZE: Change section title */}
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 uppercase">
                    Professional Journey
                </h2>

                <div className="space-y-20">
                    {/* PROFESSIONAL EXPERIENCE */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            {/* CUSTOMIZE: Change section icon */}
                            <FaChartLine className="text-4xl text-blue-800" />
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Work Experience
                            </h3>
                        </div>

                        {/* CUSTOMIZE: Change grid layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {experiences.professional.map((exp, index) => (
                                <ExperienceItem key={`pro-${index}`} experience={exp} />
                            ))}
                        </div>
                    </div>

                    {/* INTERNSHIPS */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            {/* CUSTOMIZE: Change internship section color */}
                            <FaLaptopCode className="text-4xl text-green-600" />
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Internships
                            </h3>
                        </div>

                        {/* CUSTOMIZE: Add timeline layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {experiences.internships.map((exp, index) => (
                                <ExperienceItem key={`intern-${index}`} experience={exp} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* GLOBAL CUSTOMIZATION TIPS 
        ----------------------------------
        1. Add New Experience Types:
           - Duplicate section blocks
           - Create new category in experiences object
           - Example: freelance: [...]
        
        2. Animation Control:
           - Adjust motion.div y-values
           - Change viewport margin
           - Modify transition durations
        
        3. Mobile Optimization:
           - Adjust padding (px-4 → px-2)
           - Reduce icon sizes for mobile
        
        4. Dark Mode Support:
           - Add dark: classes
           - Example: dark:bg-gray-800 dark:text-white
        
        5. Add Interactive Elements:
           - Company logo hover effects
           - Clickable recommendation badges
           - Expandable task details
        */}
            </div>
        </section>
    );
};

export default Experience;