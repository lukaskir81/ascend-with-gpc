import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to achieve my goals?",
      answer: "It depends on your goals. For body composition changes (fat reduction), results can be seen in as little as a month. For strength, speed, or power improvements, a more realistic timeframe is three months (our minimum sign-up term). This is also how long most clients take to achieve their goals."
    },
    {
      question: "How does online coaching work?",
      answer: "After purchase, we create your online account within 24 hours. You'll receive an email to download our training app, complete a consultation form, and be assigned to a coach. Your tailored programme is designed within 24-48 hours, giving you full access through the app. You also receive nutritional, supplement and training guides."
    },
    {
      question: "What if I want to refund/cancel my membership?",
      answer: "We have a strict no refund policy as we believe this supports commitment to your goals. Our online coaching uses monthly subscriptions that can be canceled anytime after the initial 3-month period. Your account becomes deactivated 30 days after the last payment."
    },
    {
      question: "Can I do online coaching from anywhere?",
      answer: "Absolutely! You can take our training anywhere - your home, hotel, or local gym. We recommend a minimum of basic weights bench, barbell and dumbbell set, plus exercise bands for optimal results."
    },
    {
      question: "Is there a free trial period?",
      answer: "We don't provide free trials due to the custom nature of each program. A free trial would erode the value of our expertise and the coaching team's experience in creating personalized programs."
    },
    {
      question: "What if I have an injury?",
      answer: "Depending on injury type and healing stage, we create programs that limit or avoid stress to affected areas. We also develop corrective exercise strategies to improve joint stabilization, connective tissue strength and flexibility."
    },
    {
      question: "Can I buy now and start later?",
      answer: "Yes! You can purchase your plan and start whenever the timing is right for you."
    },
    {
      question: "What guarantees do I have of getting results?",
      answer: "Your guarantee depends on your commitment. You must work hard and commit fully. Combined with proper rest and recovery, this drives success. The road to success isn't straight - if it was, everyone would be successful."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </CardTitle>
            <p className="text-xl text-muted-foreground mt-4">
              Answers to the most common questions about our coaching program
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;