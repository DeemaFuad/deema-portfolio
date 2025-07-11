import React, { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import ma3akGeneric from './assets/ma3ak-generic.png'
import bargGeneric from './assets/barg-generic.png'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const techStack = [
    'Java', 'Spring Boot', 'React', 'React Native', 'MongoDB', 'Node.js',
    'Tailwind CSS', 'Git', 'REST APIs', 'PostgreSQL', 'Redis', 'FastAPI'
  ]

  const projects = [
    {
      id: 1,
      title: 'Ma3ak',
      subtitle: 'React Native App',
      description: 'Mobile app enabling blind students to request assistance from nearby volunteers with GPS tracking and real-time location services.',
      tech: 'React Native + Node.js + Express.js + MongoDB',
      features: ['GPS tracking', 'Google Maps API', 'Accessibility UI', 'Real-time location'],
      github: 'Private',
      image: ma3akGeneric,
      techStack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API']
    },
    {
      id: 2,
      title: 'Vizora Dashboard',
      subtitle: 'Real-Time BI Dashboard',
      description: 'Full-stack business intelligence dashboard with real-time data visualization, predictive analytics, and role-based access control.',
      tech: 'Spring Boot + React + Tailwind CSS + FastAPI',
      features: ['Real-time metrics', 'Predictive analytics', 'Role-based access', 'WebSocket updates'],
      github: 'Coming Soon',
      image: null,
      techStack: ['Spring Boot', 'React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets']
    },
    {
      id: 3,
      title: 'Project Barg',
      subtitle: 'MERN Stack Application',
      description: 'Full-stack social media application with user authentication, profile management, posts, likes, comments, and follow/unfollow features.',
      tech: 'MongoDB + Express.js + React + Node.js',
      features: ['User authentication', 'Profile management', 'Social features', 'Real-time updates'],
      github: 'Private',
      image: bargGeneric,
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Git/GitHub']
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden">
      {/* Floating Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      {/* Hero Section with About Me */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="glass-card max-w-4xl w-full text-center p-6 md:p-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Deema Al-Sharief
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Junior Software Engineer | Java/Spring Boot + React Native
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="mailto:deemaalsharif18@gmail.com" className="contact-link">
              <Mail className="w-5 h-5" />
              deemaalsharif18@gmail.com
            </a>
            <a href="https://github.com/DeemaFuad" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github className="w-5 h-5" />
              github.com/DeemaFuad
            </a>
            <a href="https://linkedin.com/in/deema-alsharif" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin className="w-5 h-5" />
              linkedin.com/in/deema-alsharif
            </a>
          </div>
          
          {/* About Me Content */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Hi! I'm Deema, a Java/Spring wizard + React Native warrior. I build apps that solve problems, 
              not just fill screens. I'm a Computer Science grad from the University of Jordan. I love building 
              real-world apps that combine backend efficiency with user-focused UI.
            </p>
          </div>
          
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-pill">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card group cursor-pointer"
                onClick={() => openModal(project)}
              >
                {project.id === 2 ? (
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-purple-400 text-xl font-bold">Coming Soon</span>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-purple-600 font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
                
                {/* Project-specific tech stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">GitHub: {project.github}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:deemaalsharif18@gmail.com" className="contact-link">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
              <a href="https://github.com/DeemaFuad" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/deema-alsharif" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

export default App

