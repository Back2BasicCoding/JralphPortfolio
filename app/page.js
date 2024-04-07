import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col bg-[#1f1e1e] container mx-auto px-12 py-4">
      <div>
        <Navbar />
      </div>
      <div className="container mt-20 mx-auto px-12 py-4">
        <Herosection />
        <AboutSection />
        <ProjectsSection/>
        <EmailSection />
        <Footer />
      </div>
    </main>

  );
}
