import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Contact Section */}
            <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white" id="contact">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            Let's Build Something Amazing!
                        </h2>

                        <motion.img
                            src="..//..//../public/IMG-20240310-WA0001.jpg"
                            alt="Profile"
                            className="w-80 h-[400px] rounded-full object-cover shadow-lg border-4 border-blue-800 mx-auto"
                            whileHover={{ scale: 1.05 }}
                        />

                        <div className="flex flex-wrap justify-center gap-6 mb-12 pt-8">
                            {/* Email */}
                            <a
                                href="mailto:your.email@example.com"
                                className="btn btn-primary gap-2"
                            >
                                <HiMail className="text-xl" />
                                Send Email
                            </a>

                            {/* Resume */}
                            <a
                                href="/f"
                                download
                                className="btn btn-outline gap-2"
                            >
                                <FaFilePdf />
                                Download Resume
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-12">
                            <motion.a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="text-3xl text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <FaGithub />
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="text-3xl text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedin />
                            </motion.a>

                            <motion.a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="text-3xl text-gray-600 hover:text-blue-400 transition-colors"
                            >
                                <FaTwitter />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 text-center">
                    <p className="text-lg mb-2">
                        Crafted with ❤️ by Nafim Islam
                    </p>
                    <div className="text-sm">
                        © {currentYear} All rights reserved
                        <span className="mx-2">•</span>
                        Template by YourName (modify/remove if using third-party template)
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;