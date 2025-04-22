
const Stats = () => {
  return (
    <section className="section py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">5+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">100+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">10+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
