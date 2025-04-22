
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="aspect-[3/4] bg-muted">
                {/* You can replace this with an actual image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Your Photo Here
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border-4 border-primary"></div>
            </div>
          </div>
          
          <div>
            <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <span className="block text-muted-foreground mb-4">ABOUT ME</span>
              <h2 className="mb-6">I Create Products Not Just Art</h2>
              <p className="mb-6">
                Passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible code matters to me.
              </p>
              <p className="mb-8">
                I began my journey as a web developer in 2010, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning new technologies. 
                I'm currently working as a senior front-end developer at a digital agency in Paris, France.
              </p>
            </div>
            
            <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <a href="#" className="btn btn-primary group">
                Download CV
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
