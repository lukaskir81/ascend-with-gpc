import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: "🥗",
      title: "Nutritional Excellence",
      description: "Comprehensive nutritional support with our partners at Davey Nutrition for maximum impact."
    },
    {
      icon: "🏃‍♂️", 
      title: "Elevate Your Cardio",
      description: "Meticulously tailored cardio training plans, adjusted weekly to keep your progress on track."
    },
    {
      icon: "🎯",
      title: "Progressive Monthly Targets", 
      description: "Experience satisfaction hitting milestones with monthly targets based on personalized testing."
    },
    {
      icon: "📹",
      title: "Visual Learning",
      description: "Access a library of exercise videos that guide you through each movement with precision."
    },
    {
      icon: "📆",
      title: "Seamless Planning",
      description: "Easy-to-follow exercise plans with schedule notifications - never miss a beat."
    },
    {
      icon: "📈",
      title: "Track Your Triumphs",
      description: "Visualize progress with intuitive tracking. Watch achievements accumulate and drive motivation."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need to <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive package includes all the tools, support, and guidance for your transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;