"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Pong web app',
    description: "A simple Pong game using HTML, CSS, and JavaScript for the frontend, Python Django for the backend, Docker for deployment, and WebSockets (using Django Channels) for real-time communication. Three.js is used for 3D graphics, and JWT is used for authentication.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'Docker', 'WebSockets', 'Django Channels', 'Three.js', 'JWT'],
    github: 'https://github.com/abouramd/ft_transcendence_42',
    live: '',
  },
  {
    title: 'Inception',
    description: 'A project that aims to broaden your knowledge of system administration by using Docker. You will virtualize several Docker images.',
    technologies: ['Docker', 'Linux', 'system administration', 'networking', 'nginx', 'WordPress', 'MySQL', 'FTP', 'SSH', 'SSL', 'adminer'],
    github: 'https://github.com/abouramd/Inception_42',
    live: '',
  },
  {
    title: 'HTTP server',
    description: 'A simple HTTP server written in C++, that can handle multiple requests concurrently, and serve static files and also interpret files(PHP, Python, ...) using CGI protocol.',
    technologies: ['C++', 'Linux', 'HTTP', 'CGI', 'sockets programming'],
    github: 'https://github.com/abouramd/webserv',
    live: '',
  },
  {
    title: '3D world simulation',
    description: 'A 3D world simulation using RayCasting with miniLibX in C.',
    technologies: ['C', 'miniLibX', 'RayCasting'],
    github: 'https://github.com/abouramd/Cub3D_42',
    live: '',
  },
  {
    title: 'Dining philosophers problem',
    description: 'A solution to the dining philosophers problem using mutexes and threads in C. and also a solution using semaphores and processes in C.',
    technologies: ['C', 'Linux', 'mutexes', 'threads', 'semaphores', 'processes'],
    github: 'https://github.com/abouramd/dining_philosophers',
    live: '',
  },
  {
    title: 'Custom shell',
    description: 'A simple shell written in C.',
    technologies: ['C', 'Linux', 'bash'],
    github: 'https://github.com/abouramd/minishell',
    live: '',
  },
]

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32" id="projects">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-100 dark:to-violet-300 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={project.title}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-violet-600 dark:text-violet-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-violet-100 text-violet-900 dark:bg-violet-800 dark:text-violet-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center items-center flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={project.github ? '' : 'hidden'}>
                  <Button variant="outline" size="lg" className="rounded-xl">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>

                <a href={project.live} target="_blank" rel="noopener noreferrer" className={project.live ? '' : 'hidden'}>
                  <Button variant="outline" size="lg" className="rounded-xl">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

