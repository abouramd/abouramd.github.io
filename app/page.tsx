import Contact from "./_components/Contact";
import Education from "./_components/Education";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import FloatingResumeButton from './_components/FloatingResumeButton'

export default function Home() {
  return (
    <div className="w-full scroller
    bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900 dark:to-violet-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingResumeButton />
    </div>
  )
}


// import { HeaderText } from "./_components/Header";
// import Hero from "./_components/Hero";
// import { MarqueeSkills } from "./_components/MarqueeSkills";

// export default function Home() {
//   return (
//     <div className="items-center justify-items-center min-h-screen">
//       {/* <HeaderText /> */}
//       {/* <MarqueeSkills /> */}
//       <main className="container mx-auto px-4 py-8">
//         <Hero />
//         {/* <Skills />
//         <Projects />
//         <Education />
//         <Contact /> */}
//       </main>
//       <footer className="flex items-center justify-center w-full h-24 border-t dark:border-neutral-700">
//         <p>
//           &copy; {new Date().getFullYear()} by <a href="https://github.com/abouramd" target="_blank" rel="noopener noreferrer">Abdelhay Bouramdane</a>
//         </p>
//       </footer>
//     </div>
//   );
// }
