import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Gallery from "./pages/Gallery";
import Calendar from "./pages/Calendar";
import Marketplace from "./pages/Marketplace";
import Contact from "./pages/Contact";
import LiveKirtan from "./pages/LiveKirtan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/live-kirtan" element={<LiveKirtan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
