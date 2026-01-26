import { Heart, Users, BookOpen, UtensilsCrossed } from "lucide-react";
import khandaSymbol from "@/assets/khanda-symbol.png";

const features = [
  {
    icon: BookOpen,
    title: "Daily Prayers",
    description: "Join us for morning and evening prayers, kirtan, and spiritual teachings.",
  },
  {
    icon: UtensilsCrossed,
    title: "Langar Service",
    description: "Free community meals served daily to all visitors regardless of background.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Celebrate festivals, host weddings, and participate in seva activities.",
  },
  {
    icon: Heart,
    title: "Charity Work",
    description: "Supporting those in need through donations, food drives, and outreach programs.",
  },
];

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src={khandaSymbol}
            alt="Khanda"
            className="h-16 w-16 mx-auto mb-6"
          />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Welcome to Our <span className="text-gradient-saffron">Spiritual Home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our Gurudwara is a sacred place open to all, where we practice the teachings of 
            Guru Nanak Dev Ji: equality, selfless service, and devotion to the One Creator.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-saffron mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
