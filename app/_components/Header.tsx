"use client";

import Link from 'next/link'
import { Menu, MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes';
import Variants from './Nav';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {

  const { theme, setTheme } = useTheme();
  
  const ToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  
  return (
    <header className="sticky flex justify-center top-0 z-50 w-full border-b bg-white/80 dark:bg-violet-900/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-violet-900 to-violet-700 dark:from-violet-100 dark:to-violet-300 bg-clip-text text-transparent">
          Abouramd
        </Link>
        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
          {['Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="ml-auto md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {['Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* <Variants /> */}
        <Button variant="ghost" size="icon" className="ml-6" onClick={ToggleTheme}>
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
