import { Button } from "@/components/ui/button";
import heroGym from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroGym} 
          alt="Professional gym facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Elevate Your <span className="text-primary">Performance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Experience top-tier training with GPC Performance's online coaching platform. 
            Our renowned Strength and Conditioning coaches are here to elevate your fitness journey.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Button 
              variant="hero" 
              size="xl"
              className="w-full md:w-auto"
            >
              Start Your Transformation
            </Button>
            <Button 
              variant="chatbot" 
              size="xl"
              className="w-full md:w-auto"
              onClick={() => window.open('https://www.gpc-performance.com/gpcchat', '_blank')}
            >
              💬 Chat with Our Expert
            </Button>
          </div>
          <div className="mt-12 text-sm text-muted-foreground">
            <p>🏆 Trusted by Elite Athletes • 📱 Powerful Mobile App • 🎯 Personalized Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;