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
                <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-24 px-2 sm:px-8 lg:px-10">
                    {/* Image - Responsive Sizing */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <img
                            src="../../../../public/IMG_3267.JPG"
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
                            <a
                                href={resumePDF}
                                download
                                className="btn btn-accent btn-outline"
                            >
                                Download Resume
                            </a>
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

            {/* Projects Section - Responsive Grid */}
            {/* <section className="px-4 sm:px-8 lg:px-20 py-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((project) => (
                        <div key={project} className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title text-lg lg:text-xl">Project {project}</h3>
                                <p className="text-sm lg:text-base">Project description</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Responsive Contact Form */}
            {/* <section className="px-4 sm:px-8 lg:px-20 py-16" id="contact">
                <div className="max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl lg:text-3xl">Contact Me</h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                />
                                <textarea
                                    className="textarea textarea-bordered w-full h-32"
                                    placeholder="Message"
                                ></textarea>
                                <button className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Home;