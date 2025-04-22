import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
