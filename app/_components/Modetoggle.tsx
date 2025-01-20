"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

 
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };
 
  return (
    <div className='h-full w-full text-neutral-600 dark:text-neutral-300' onClick={handleToggle}>
        <Sun className="h-full w-full transition-all dark:hidden" />
        <Moon className="h-full w-full hidden transition-all dark:block" />
    </div>
  )
}