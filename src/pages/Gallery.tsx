import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import heroGoldenTemple from "@/assets/hero-golden-temple.jpg";
import gurudwaraInterior from "@/assets/gurudwara-interior.jpg";
import langarService from "@/assets/langar-service.jpg";

const galleryCategories = ["All", "Gurudwara", "Events", "Langar", "Community"];

const galleryImages = [
  { src: heroGoldenTemple, category: "Gurudwara", title: "Golden Temple at Sunset" },
  { src: gurudwaraInterior, category: "Gurudwara", title: "Main Prayer Hall" },
  { src: langarService, category: "Langar", title: "Community Langar" },
  { src: heroGoldenTemple, category: "Events", title: "Gurpurab Celebration" },
  { src: gurudwaraInterior, category: "Community", title: "Youth Program" },
  { src: langarService, category: "Langar", title: "Seva Volunteers" },
  { src: heroGoldenTemple, category: "Gurudwara", title: "Evening Prayers" },
  { src: gurudwaraInterior, category: "Events", title: "Wedding Ceremony" },
  { src: langarService, category: "Community", title: "Food Drive" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Moments of devotion, community, and celebration"
        backgroundImage={heroGoldenTemple}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-saffron text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-gold font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-primary-foreground mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-primary-foreground/20 hover:bg-primary-foreground/40 rounded-full backdrop-blur-sm"
          >
            <X className="h-6 w-6 text-primary-foreground" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
