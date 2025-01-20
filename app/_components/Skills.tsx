"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'bash'] },
  { category: 'Web Technologies', items: ['HTML', 'CSS', 'React', 'Next.js','Node.js', 'Express'] },
  { category: 'Tools & Platforms', items: ['Git', 'Docker', 'prisma', 'Linux'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
]

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="py-32" id="skills">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-100 dark:to-violet-300 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={skill.category}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center text-violet-600 dark:text-violet-400">
                      <span className="w-2 h-2 bg-violet-900 dark:bg-violet-100 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

