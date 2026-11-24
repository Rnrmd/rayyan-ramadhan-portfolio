import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";

export default function Page() {
  return (
    <SmoothScroll>
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
