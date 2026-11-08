import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/Experience";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Hero />
        <ExperienceSection />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
