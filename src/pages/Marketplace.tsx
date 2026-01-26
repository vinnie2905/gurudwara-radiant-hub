import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Filter } from "lucide-react";
import khandaSymbol from "@/assets/khanda-symbol.png";

const categories = ["All", "Books", "Clothing", "Accessories", "Music", "Home"];

const products = [
  {
    id: 1,
    name: "Gutka Sahib",
    category: "Books",
    price: 25,
    rating: 5,
    image: khandaSymbol,
    description: "Sacred prayer book with daily prayers",
  },
  {
    id: 2,
    name: "Sikh Prayer Beads (Mala)",
    category: "Accessories",
    price: 15,
    rating: 4.5,
    image: khandaSymbol,
    description: "108 bead wooden mala for meditation",
  },
  {
    id: 3,
    name: "Traditional Kurta Pajama",
    category: "Clothing",
    price: 65,
    rating: 4.8,
    image: khandaSymbol,
    description: "White cotton kurta pajama set",
  },
  {
    id: 4,
    name: "Kirtan CD Collection",
    category: "Music",
    price: 20,
    rating: 5,
    image: khandaSymbol,
    description: "5-disc collection of sacred hymns",
  },
  {
    id: 5,
    name: "Khanda Wall Hanging",
    category: "Home",
    price: 35,
    rating: 4.7,
    image: khandaSymbol,
    description: "Brass Khanda symbol for home",
  },
  {
    id: 6,
    name: "Sikh History Book",
    category: "Books",
    price: 30,
    rating: 4.9,
    image: khandaSymbol,
    description: "Complete history of Sikh Gurus",
  },
  {
    id: 7,
    name: "Turban (Dastar)",
    category: "Clothing",
    price: 18,
    rating: 4.6,
    image: khandaSymbol,
    description: "6 meters premium cotton fabric",
  },
  {
    id: 8,
    name: "Kara (Steel Bracelet)",
    category: "Accessories",
    price: 12,
    rating: 5,
    image: khandaSymbol,
    description: "Traditional steel kara",
  },
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  const isInCart = (productId: number) => cart.includes(productId);

  return (
    <Layout>
      <PageHeader
        title="Marketplace"
        subtitle="Support the Gurudwara by purchasing spiritual items and merchandise"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header with Cart */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Filter by category:</span>
            </div>
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-saffron text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover"
              >
                <div className="aspect-square bg-muted flex items-center justify-center p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-gold fill-gold"
                            : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      disabled={isInCart(product.id)}
                      className={
                        isInCart(product.id)
                          ? "bg-muted text-muted-foreground"
                          : "bg-gradient-saffron hover:opacity-90 text-primary-foreground"
                      }
                    >
                      {isInCart(product.id) ? "Added" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Marketplace;
