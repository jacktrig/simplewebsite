import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Verified Poltical Research/News Platform",
      description: "Built a full-stack research/news platform using React, Node.js, and MongoDB. Implemented features like user authentication, live news feed and verification, and a searchable repository of verified informzation qbout U.S. politics.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Trading Dashboard",
      description: "Developed a trading dashboard to automate logging and tracking all my trades and their subsequent results. Incorporates data visualization and interactive charts.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Automated Stock Trading System",
      description: "Created a automated stock trading system that displays real-time results and utilizes API connections to gather data and execute trades.",
      tags: ["JavaScript", "REST API", "Chart.js"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Kubernetes"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold">John Doe</h1>
            <div className="flex gap-4">
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-6">Full Stack Developer</h2>
          <p className="text-xl text-gray-600 mb-8">
            Utilizing modern technologies to build automated trading systems and web apps.
            Passionate about creating simple solutions to complex problems.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get in Touch
            </a>
            <a href="#projects" className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="mailto:jacksontrigiani@proton.me" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Mail size={20} /> your.email@example.com
            </a>
            <a href="https://github.com/jacktrig" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Github size={20} /> GitHub Profile
            </a>
            <a href="https://linkedin.com/in/jacksontrigiani" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Linkedin size={20} /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Jackson Trigiani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;