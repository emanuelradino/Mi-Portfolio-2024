import AboutMe from "@/components/about-me";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Experience from '@/components/experience'
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Formation from "@/components/formation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
<main className="p-40" >
  <Navbar/>
  <Introduction />
  <AboutMe />
  <Experience />
  <Services />
  <Portfolio />
  <Formation />
  <Contact />
  <Footer />
  </main>
  );
}
