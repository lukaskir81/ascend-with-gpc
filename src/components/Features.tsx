import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coachingSession from "@/assets/coaching-session.jpg";
import strengthTraining from "@/assets/strength-training.jpg";
import mobileApp from "@/assets/mobile-app.jpg";

const Features = () => {
  const features = [
    {
      icon: "💪",
      title: "Tailored Training & Workouts",
      description: "Customized training plans aligned with your goals - strength, speed, fitness, or lean physique. From gym routines to at-home workouts.",
      image: strengthTraining,
      benefits: [
        "🏋️‍♂️ Unleash Your Strength Potential",
        "🏃‍♀️ Surpass Speed Limits", 
        "⚡ Sustained Game Fitness",
        "🩺 Injury-Proof Training"
      ]
    },
    {
      icon: "👨‍💼",
      title: "Expert Coaching Support",
      description: "Benefit from daily support, weekly check-ins, and monthly Zoom calls with certified coaches who've guided elite athletes.",
      image: coachingSession,
      benefits: [
        "📞 Daily Support Available",
        "📋 Weekly Progress Check-ins",
        "🎥 Monthly 15-min Zoom Calls",
        "🏆 Elite Athlete Experience"
      ]
    },
    {
      icon: "📱",
      title: "Powerful Mobile App",
      description: "Access your personalized fitness journey anywhere. Track progress, view exercise videos, and stay motivated with schedule notifications.",
      image: mobileApp,
      benefits: [
        "📹 Exercise Video Library",
        "📈 Progress Tracking",
        "📆 Schedule Notifications",
        "🎯 Monthly Target Setting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your Complete <span className="text-primary">Transformation Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🚀 Powerful Results Await You - Unlock your potential with our comprehensive coaching approach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-4xl">{feature.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-center">
                      <span className="mr-2">{benefit.split(' ')[0]}</span>
                      <span>{benefit.substring(benefit.indexOf(' ') + 1)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl"
            className="mb-4"
          >
            Get Your Custom Plan Now
          </Button>
          <p className="text-sm text-muted-foreground">
            📈 Join hundreds of athletes achieving their peak performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;