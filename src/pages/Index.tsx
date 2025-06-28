
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Strengths from "@/components/Strengths";
import Projects from "@/components/Projects";
import TextClassification from "@/components/TextClassification";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Strengths />
      <Projects />
      <TextClassification />
      <Experience />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
