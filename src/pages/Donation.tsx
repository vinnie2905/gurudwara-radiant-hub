import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Building2, UtensilsCrossed, GraduationCap, HandHeart } from "lucide-react";

const donationCategories = [
  {
    id: "langar",
    icon: UtensilsCrossed,
    title: "Langar Seva",
    description: "Support free community meals",
  },
  {
    id: "building",
    icon: Building2,
    title: "Building Fund",
    description: "Maintain and improve facilities",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Support Punjabi & Sikh studies",
  },
  {
    id: "general",
    icon: HandHeart,
    title: "General Fund",
    description: "Support all Gurudwara activities",
  },
];

const suggestedAmounts = [25, 51, 101, 251, 501, 1001];

const Donation = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setAmount("");
  };

  return (
    <Layout>
      <PageHeader
        title="Make a Donation"
        subtitle="Your generosity helps us serve the community and spread the message of love"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Donation Categories */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Choose a <span className="text-gradient-saffron">Cause</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {donationCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${
                      selectedCategory === category.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <category.icon
                      className={`h-8 w-8 mb-3 ${
                        selectedCategory === category.id
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-semibold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Donation <span className="text-gradient-saffron">Amount</span>
              </h2>

              {/* Suggested Amounts */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                {suggestedAmounts.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAmountSelect(String(value))}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      amount === String(value)
                        ? "bg-gradient-saffron text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <Label htmlFor="customAmount" className="text-muted-foreground">
                  Or enter custom amount
                </Label>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="pl-8 text-lg h-12"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <Label className="text-foreground font-semibold mb-3 block">
                  Donation Type
                </Label>
                <RadioGroup defaultValue="one-time" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time" className="cursor-pointer">
                      One-time
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="cursor-pointer">
                      Monthly
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="dedication">In Honor/Memory Of (Optional)</Label>
                  <Input
                    id="dedication"
                    placeholder="Name of honoree"
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                size="lg"
                className="w-full bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold text-lg py-6"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate ${amount || customAmount || "0"}
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Your donation is tax-deductible. A receipt will be emailed to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donation;
