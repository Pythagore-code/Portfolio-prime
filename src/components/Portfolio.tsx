
import { useState } from 'react';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Minimalist Website Design",
    category: "web",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Mobile App Interface",
    category: "app",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Brand Identity Package",
    category: "branding",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "E-commerce Website",
    category: "web",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Social Media App",
    category: "app",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Restaurant Branding",
    category: "branding",
    image: "/placeholder.svg"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="block text-muted-foreground mb-4">MY WORKS</span>
          <h2 className="mb-6">Featured Portfolio</h2>
          <p className="text-muted-foreground">
            A collection of some of my recent projects that showcase my skills and expertise in design and development.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-muted p-1">
            <button 
              className={`px-4 py-2 text-sm transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 text-sm transition-colors ${filter === 'web' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web Design
            </button>
            <button 
              className={`px-4 py-2 text-sm transition-colors ${filter === 'app' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => setFilter('app')}
            >
              App Design
            </button>
            <button 
              className={`px-4 py-2 text-sm transition-colors ${filter === 'branding' ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => setFilter('branding')}
            >
              Branding
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center p-4">
                  <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                  <span className="text-white/80 text-sm uppercase">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
