
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="block text-muted-foreground mb-4">GET IN TOUCH</span>
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground">
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Location</h3>
                  <p className="text-muted-foreground">Paris, France</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="social-icon">
                  <span>FB</span>
                </a>
                <a href="#" className="social-icon">
                  <span>IG</span>
                </a>
                <a href="#" className="social-icon">
                  <span>TW</span>
                </a>
                <a href="#" className="social-icon">
                  <span>LN</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <form>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
