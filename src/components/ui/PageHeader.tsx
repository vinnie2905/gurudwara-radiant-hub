interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.7)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Gradient background when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-royal via-royal-light/80 to-saffron/30" />
      )}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gold/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V20C240 0 480 0 720 20C960 40 1200 40 1440 20V60H0Z"
            fill="transparent"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
