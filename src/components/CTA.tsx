import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur border-primary/20 shadow-glow">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to <span className="text-primary">Transform</span> Your Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your path to excellence starts here. Join elite athletes and fitness enthusiasts 
              who have already transformed their lives with GPC Performance.
            </p>
            
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center mb-8">
              <Button 
                variant="hero" 
                size="xl"
                className="w-full md:w-auto"
              >
                Start Your Journey Today
              </Button>
              <Button 
                variant="chatbot" 
                size="xl"
                className="w-full md:w-auto"
                onClick={() => window.open('https://www.gpc-performance.com/gpcchat', '_blank')}
              >
                💬 Speak with a Coach
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Athletes Trained</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              🏆 Trusted by professional athletes worldwide • 📱 Start immediately after signup
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;