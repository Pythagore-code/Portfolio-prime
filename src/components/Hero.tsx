
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <h1 className="font-bold mb-6">
              Creative Designer <br /> & Developer
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I design and code beautifully simple things, and I love what I do. Just simple like that!
            </p>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-20 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <div className="w-32 h-32 rounded-full mx-auto border-4 border-muted bg-secondary flex items-center justify-center">
              <span className="text-lg font-medium">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
