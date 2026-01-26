import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { BookOpen, Heart, Users, Award } from "lucide-react";
import gurudwaraInterior from "@/assets/gurudwara-interior.jpg";
import langarService from "@/assets/langar-service.jpg";

const values = [
  {
    icon: BookOpen,
    title: "Naam Japna",
    description: "Meditating on God's name and keeping Him in your thoughts at all times.",
  },
  {
    icon: Heart,
    title: "Kirat Karni",
    description: "Earning an honest living through hard work and integrity.",
  },
  {
    icon: Users,
    title: "Vand Chakna",
    description: "Sharing what you have with others, especially those in need.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Learn about our history, mission, and the teachings we follow"
        backgroundImage={gurudwaraInterior}
      />

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our <span className="text-gradient-saffron">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-12">
              Gurudwara Sahib is dedicated to spreading the universal message of Sikhi: 
              that there is One God for all humanity, and that all people are equal regardless 
              of caste, creed, color, or gender. We strive to create a welcoming spiritual 
              sanctuary where everyone can experience peace, community, and divine connection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-saffron mb-4">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-gradient-saffron">History</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established in 1985, our Gurudwara began as a small gathering of Sikh families 
                  who came together to practice their faith and preserve their cultural heritage. 
                  What started in a humble community center has grown into a vibrant spiritual home 
                  serving thousands of devotees.
                </p>
                <p>
                  Over the decades, we have expanded our facilities to include a beautiful Darbar 
                  Sahib (prayer hall), a large Langar Hall serving free meals daily, classrooms 
                  for Punjabi and Sikh studies, and a community center for events and gatherings.
                </p>
                <p>
                  Today, we continue to grow and serve our community with the same dedication 
                  and love that our founding members brought to this sacred endeavor.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={langarService}
                alt="Langar Service"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-saffron p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <Award className="h-12 w-12 text-primary-foreground" />
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">35+</p>
                    <p className="text-primary-foreground/80">Years of Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our <span className="text-gradient-saffron">Leadership</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our Gurudwara is managed by a dedicated committee of volunteers who selflessly 
              give their time and energy to ensure smooth operations of all services. The 
              management committee is elected by the sangat (congregation) and serves with 
              humility and dedication.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["President", "Secretary", "Treasurer", "Head Granthi"].map((role) => (
                <div key={role} className="p-4 bg-card rounded-xl border border-border">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
