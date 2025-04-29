
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Laurent",
    role: "Directrice Marketing",
    company: "TechInnovate",
    content: "Travailler avec READORA a été une expérience exceptionnelle. La qualité du travail et l'attention aux détails ont dépassé nos attentes. Je recommande vivement leurs services pour tout projet créatif.",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Chef de Projet",
    company: "DesignStudio",
    content: "J'ai eu le plaisir de collaborer sur plusieurs projets et je suis toujours impressionné par le professionnalisme et la créativité. Les délais sont toujours respectés et les résultats sont exceptionnels.",
    avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Sophie Moreau",
    role: "Fondatrice",
    company: "CreativeLab",
    content: "Un talent extraordinaire et une capacité à traduire des idées complexes en designs élégants. READORA a transformé notre vision en réalité avec brio. Une collaboration que je renouvellerai sans hésiter.",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Alexandre Martin",
    role: "Directeur Artistique",
    company: "MediaPlus",
    content: "Créatif, réactif et à l'écoute. J'ai rarement travaillé avec un professionnel aussi talentueux. Les résultats de notre collaboration ont dépassé toutes nos attentes et ont vraiment impressionné nos clients.",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Autoplay functionality
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-secondary/50">
      <div className="container">
        <h2 className="text-center mb-16">Ce qu'ils disent de moi</h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel 
            opts={{ 
              align: "center",
              loop: true, 
            }}
            className="w-full"
            setApi={(api) => {
              if (api) {
                api.scrollTo(activeIndex);
              }
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="border-none bg-background/50 backdrop-blur-sm shadow-md">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Avatar className="h-20 w-20 mb-6 border-2 border-primary">
                        {testimonial.avatar ? (
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback>
                            <User className="h-10 w-10" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <blockquote className="text-lg mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>
                      <footer className="mt-2">
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} - {testimonial.company}
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary scale-125" : "bg-primary/30"
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
