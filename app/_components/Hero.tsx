'use client';
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <motion.section


            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            className="py-32 text-center px-4">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-100 dark:to-violet-300 bg-clip-text text-transparent">
                Abdelhay Bouramdane
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-3xl text-violet-600 dark:text-violet-400 mb-8">Software Engineer | 1337 UM6P Student</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="max-w-2xl mx-auto mb-12 text-xl text-violet-600 dark:text-violet-400 leading-relaxed">
                Passionate about creating innovative solutions and constantly learning new technologies.
                Specializing in web development and software engineering.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link href="#projects">
                    <Button className="px-8 py-6 text-lg rounded-xl bg-violet-900 text-white hover:bg-violet-800 dark:bg-violet-100 dark:text-violet-900 dark:hover:bg-violet-200 transition-all">
                        View Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </motion.div>
        </motion.section>
    )
}

