import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary">GPC</div>
              <div className="text-xl font-semibold text-foreground">Performance</div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Elevating fitness journeys through expert online coaching. 
              Trusted by elite athletes and fitness enthusiasts worldwide.
            </p>
            <div className="mt-6">
              <Button 
                variant="chatbot" 
                size="lg"
                onClick={() => window.open('https://www.gpc-performance.com/gpcchat', '_blank')}
              >
                💬 Start Conversation
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Training Programs</a></li>
              <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#cta" className="hover:text-primary transition-colors">Get Started</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>🏋️‍♂️ Custom Training</li>
              <li>📱 Mobile App</li>
              <li>👨‍💼 Expert Coaching</li>
              <li>🥗 Nutrition Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 GPC Performance. All rights reserved. Elevating fitness journeys worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;