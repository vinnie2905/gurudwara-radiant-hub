import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import WelcomeSection from "@/components/home/WelcomeSection";
import EventsPreview from "@/components/home/EventsPreview";
import DonationCTA from "@/components/home/DonationCTA";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <WelcomeSection />
      <EventsPreview />
      <DonationCTA />
    </Layout>
  );
};

export default Index;
