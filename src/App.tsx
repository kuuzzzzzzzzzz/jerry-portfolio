import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <main className="min-h-screen bg-[#f4f5ef] text-gray-900">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
