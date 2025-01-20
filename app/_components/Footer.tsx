import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t flex items-center justify-center">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Abdelhay Bouramdane.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/abouramd" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/abouramd" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:abdelhaybouramdane@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

