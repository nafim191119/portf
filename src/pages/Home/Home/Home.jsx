import React from 'react';
import { motion } from "framer-motion"; // For animations
import resumePDF from "../../../../public/resumeOfNafim.pdf"; // Update path
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Section - Responsive Layout */}
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-24 px-2 sm:px-12 lg:px-10">
                    {/* Image - Responsive Sizing */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <img
                            src="https://i.ibb.co.com/prB726vt/IMG-3267.jpg"
                            alt="Profile"
                            className="rounded-lg shadow-2xl w-full max-w-sm mx-auto"
                        />
                    </motion.div>

                    {/* Text Content - Responsive Typography */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl sm:text-3xl lg:text-5xl text-center lg:text-left">
                            Hi there! <br /> <span className="text-black text-5xl font-bold">I'm  Nafim Islam</span>
                        </h1>

                        <p className="py-4 sm:py-6 text-base sm:text-lg lg:text-md text-neutral text-center lg:text-left">
                            MERN Stack Developer <br />
                            4+ Years Experience | Full-Stack Solutions<br />
                            Building scalable web solutions while bridging hardware & software through engineering. <br />

                        </p>

                        {/* Buttons - Responsive Stacking */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="btn btn-accent">Hire Me</button>
                            <a href={resumePDF} download className="btn btn-accent btn-outline">Download Resume</a>
                        </div>

                        {/* Social Icons - Responsive Centering */}
                        <div className="mt-6 sm:mt-8 flex gap-3 justify-center lg:justify-start">
                            {/* Add your social icons here */}
                            <Link className="text-3xl hover:text-blue-600 transition-colors duration-300">
                                <FaLinkedin />
                            </Link>
                            <Link className="text-3xl hover:text-gray-800 transition-colors duration-300">
                                <FaGithub />
                            </Link>
                            <Link className="text-3xl hover:text-blue-700 transition-colors duration-300">
                                <FaFacebook />
                            </Link>
                            <Link className="text-3xl hover:text-green-500 transition-colors duration-300">
                                <FaWhatsapp />
                            </Link>
                            <Link className="text-3xl hover:text-pink-500 transition-colors duration-300">
                                <FaInstagram />
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;