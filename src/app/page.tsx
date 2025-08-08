import React from "react";
import Navbar from "@/components/section/navbar/Navbar";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Projects from "@/components/section/projects/Projects";
import Contact from "@/components/section/contact/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
