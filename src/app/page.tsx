import Hero from '@/components/global/hero/Hero';
import About from '@/components/global/about/About';
import Projects from '@/components/global/projects/Projects';
import Skills from '@/components/global/skills/Skills';
import Contact from '@/components/global/contact/Contact';
import Footer from '@/components/global/footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
