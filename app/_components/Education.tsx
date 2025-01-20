"use client";
import { motion } from 'framer-motion'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32" id="education">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-100 dark:to-violet-300 bg-clip-text text-transparent">
        Education
      </h2>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>1337 School - UM6P</CardTitle>
            <CardDescription>Software Engineering Program</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Year of Study: 2022-2025</p>
            <p>1337 School is a project-based coding school that follows a peer-to-peer learning model. Students are required to complete a series of projects to advance to the next level. The curriculum is divided into 21 levels, each focusing on a specific set of skills and technologies.</p>
            <p>Progress and Status:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Current Level: 11.52/21</li>
              <li>Common Core Completion: 100%</li>
            </ul>
            <p>Key Skills Developed:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Algorithms: Sorting, searching, data structures</li>
              <li>Imperative Programming: C basics, memory management, recursion</li>
              <li>Object-Oriented Programming: C++ principles, polymorphism, templates</li>
              <li>System Programming: Unix system calls, process management, sockets</li>
              <li>Web Development: HTML, CSS, JavaScript, backend frameworks</li>
              <li>Network & System Administration: Docker, virtualization, Linux setup</li>
              <li>Graphics: Image manipulation, 2D game development</li>
            </ul>
            <p>Notable Achievements:</p>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Projects Completed:</strong>
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>Libft:</strong> Implemented C standard library functions</li>
                  <li><strong>ft_printf:</strong> Developed a custom printf function</li>
                  <li><strong>Minishell:</strong> Created a Unix-based shell</li>
                  <li><strong>Webserv:</strong> Built an HTTP server</li>
                  <li><strong>Cub3D:</strong> Worked on 3D rendering with ray-casting</li>
                  <li><strong>Inception:</strong> Explored Docker virtualization</li>
                  <li><strong>ft_transcendence:</strong> Developed a web application</li>
                </ul>
              </li>
            </ul>
            <p>Extracurricular Activities:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Participated in hackathons and coding competitions(XAD Hackathon, Codingame contests, ...)</li>
              <li>Collaborated on open-source projects.(<a href="https://github.com/auto-differentiation/xad/" target="_blank" rel="noopener noreferrer">XAD project <ExternalLink className='inline-block w-4 h-4' size={16} /></a>)</li>
            </ul>
          </CardContent>
        </Card>


      </motion.div>
    </motion.section>
  )
}

