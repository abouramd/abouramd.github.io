'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download, X, Eye } from 'lucide-react'

export default function FloatingResumeButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="bg-violet-900 text-white dark:bg-violet-100 dark:text-violet-900 rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleOpen}
        >
          <FileText size={24} />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-violet-800 rounded-lg shadow-lg p-6 w-full max-w-sm relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={toggleOpen}
                className="absolute top-2 right-2 text-violet-500 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-200"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-violet-900 dark:text-violet-100">Resume Options</h2>
              <div className="space-y-4">
                <a
                  href="/assest/docs/abdelhay_bouramdane_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 text-lg text-white bg-violet-900 rounded-md hover:bg-violet-800 transition-colors dark:bg-violet-100 dark:text-violet-900 dark:hover:bg-violet-200"
                >
                  <Eye size={20} className="mr-2" />
                  View Resume
                </a>
                <a
                  href="/assest/docs/abdelhay_bouramdane_cv.pdf"
                  download
                  className="flex items-center justify-center w-full px-4 py-2 text-lg text-violet-900 bg-violet-100 rounded-md hover:bg-violet-200 transition-colors dark:bg-violet-700 dark:text-violet-100 dark:hover:bg-violet-600"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

