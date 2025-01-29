import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  FaMedium, 
  FaHashnode, 
  FaDev, 
  FaRegCalendarAlt, 
  FaRegClock,
  FaEye,
  FaHeart,
  FaExternalLinkAlt,
  FaTwitter,
  FaLinkedin,
  FaBookmark
} from "react-icons/fa";

const initialArticles = [
  {
    id: 1,
    title: "Real-Time Chat App with Socket.io",
    excerpt: "Step-by-step guide to building scalable real-time applications...",
    date: "Mar 2024",
    readTime: 8,
    link: "#",
    platform: "medium",
    tags: ["Node.js", "WebSockets", "React"],
    views: 2500,
    likes: 148,
    featured: true,
    readingProgress: 65
  },
  {
    id: 2,
    title: "Optimizing MongoDB Queries",
    excerpt: "Advanced techniques for database performance tuning...",
    date: "Feb 2024",
    readTime: 12,
    link: "#",
    platform: "hashnode",
    tags: ["MongoDB", "Performance", "Database"],
    views: 1800,
    likes: 92,
    readingProgress: 40
  }
];

const Blog = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");

  const PLATFORM_CONFIG = {
    medium: { color: "text-[#00AB6C]", icon: <FaMedium />, name: "Medium" },
    hashnode: { color: "text-[#2962FF]", icon: <FaHashnode />, name: "Hashnode" },
    devto: { color: "text-[#0A0A0A]", icon: <FaDev />, name: "Dev.to" }
  };

  useEffect(() => {
    // Simulated CMS fetch
    // fetch('your-api-endpoint').then(res => setArticles(res.data))
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const trackArticleClick = (articleId) => {
    console.log(`Article ${articleId} clicked`);
    // Add analytics tracking here
  };

  const handleTwitterShare = (article) => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${article.link}`;
    window.open(url, '_blank');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className={`py-16 px-4 sm:px-8 lg:px-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`} id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            className={`input input-bordered max-w-md ${
              darkMode ? 'bg-gray-800 text-white border-gray-700' : ''
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search articles"
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-ghost self-end"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'} Mode
          </button>
        </div>

        <h2 className={`text-3xl lg:text-4xl font-bold text-center mb-16 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Technical Writings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No articles found matching your search
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card shadow-lg hover:shadow-xl transition-shadow group ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                whileHover={{ rotateY: 5, rotateX: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => trackArticleClick(article.id)}
              >
                <div className="card-body p-6">
                  {article.featured && (
                    <span className="badge badge-primary absolute top-4 right-4">
                      Featured
                    </span>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-2xl ${PLATFORM_CONFIG[article.platform].color}`}>
                      {PLATFORM_CONFIG[article.platform].icon}
                    </div>
                    <span className={`badge badge-outline badge-sm ${
                      darkMode ? 'border-gray-600' : ''
                    }`}>
                      {PLATFORM_CONFIG[article.platform].name}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-800 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h3>

                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {article.excerpt}
                  </p>

                  <div className="h-1 bg-gray-200 mt-4">
                    <div 
                      className="h-full bg-blue-800 transition-all duration-500" 
                      style={{ width: `${article.readingProgress}%` }}
                    />
                  </div>

                  <div className={`flex items-center gap-4 text-sm mt-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <span className="flex items-center gap-1">
                      <FaRegCalendarAlt />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegClock />
                      {article.readTime} min read
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye /> {article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaHeart /> {article.likes.toLocaleString()}
                    </span>
                  </div>

                  {article.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`badge badge-outline badge-sm px-3 py-1.5 font-medium ${
                            darkMode ? 'border-gray-600' : ''
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                    <button 
                      className="btn btn-ghost btn-sm p-2"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTwitterShare(article);
                      }}
                    >
                      <FaTwitter className="text-blue-400 text-lg" />
                    </button>
                    <button 
                      className="btn btn-ghost btn-sm p-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      <FaLinkedin className="text-blue-600 text-lg" />
                    </button>
                    <button 
                      className="btn btn-ghost btn-sm p-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      <FaBookmark className="text-gray-500 text-lg" />
                    </button>
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </div>

        <div className={`mt-16 p-8 rounded-xl text-center ${
          darkMode ? 'bg-gray-800' : 'bg-blue-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get Latest Articles
          </h3>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`input flex-1 ${
                darkMode ? 'bg-gray-700 text-white' : ''
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            View All Articles <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;