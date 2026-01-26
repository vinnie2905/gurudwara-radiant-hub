import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Sparkles } from "lucide-react";

const DonationCTA = () => {
  return (
    <section className="py-20 bg-gradient-royal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="h-24 w-24 text-gold" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Sparkles className="h-32 w-32 text-gold" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 mb-8">
            <HandHeart className="h-10 w-10 text-gold" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Support Our <span className="text-gold">Sacred Mission</span>
          </h2>
          
          <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
            Your generous donations help us maintain the Gurudwara, serve free meals to thousands, 
            support community programs, and spread the message of love and equality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donation">
              <Button
                size="lg"
                className="bg-gradient-gold hover:opacity-90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold text-lg px-8 py-6 rounded-full"
              >
                Learn About Seva
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
