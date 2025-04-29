
import { ArrowRight, Download } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-12 md:pb-20 relative"
    >
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000')`,
          opacity: 0.3
        }}
      />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 md:mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <label htmlFor="profile-upload" className="cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">Update Profile</span>
                </div>
              </div>
            </label>
            <input 
              type="file" 
              id="profile-upload" 
              className="hidden" 
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  // Handle file upload here
                  console.log("File selected:", file);
                }
              }}
            />
          </div>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Creative Designer <br /> & Developer
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              I design and code beautifully simple things, and I love what I do. Just simple like that!
            </p>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            <div className="mt-6 md:mt-8">
              <a 
                href="/path/to/your/cv.pdf" 
                download 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
