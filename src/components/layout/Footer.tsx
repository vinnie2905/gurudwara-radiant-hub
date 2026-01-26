import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram } from "lucide-react";
import khandaSymbol from "@/assets/khanda-symbol.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={khandaSymbol} alt="Gurudwara" className="h-12 w-12 brightness-0 invert" />
              <div>
                <h3 className="font-display text-xl font-bold">Gurudwara Sahib</h3>
                <p className="text-xs opacity-80">ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              A spiritual sanctuary dedicated to the teachings of Guru Nanak Dev Ji. 
              All are welcome to experience peace, community, and the divine here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Donation", "Gallery", "Calendar", "Marketplace", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                      className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm opacity-90">
                  123 Sacred Lane, Spiritual City, SC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm opacity-90">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm opacity-90">info@gurudwarasahib.org</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Darbar Hours</h4>
            <div className="flex items-start gap-3 mb-6">
              <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div className="text-sm opacity-90">
                <p>Daily: 5:00 AM - 9:00 PM</p>
                <p>Langar: 11:30 AM - 2:00 PM</p>
                <p>& 6:00 PM - 8:00 PM</p>
              </div>
            </div>
            
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-royal-light rounded-full hover:bg-gold hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-royal-light rounded-full hover:bg-gold hover:text-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-royal-light rounded-full hover:bg-gold hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-royal-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 Gurudwara Sahib. All rights reserved.</p>
            <p className="font-display">ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
