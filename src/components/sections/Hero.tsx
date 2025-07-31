import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold hero-text mb-6 leading-tight">
            Your Journey
            <span className="block gradient-text">Begins Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl hero-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking destinations across Tamil Nadu with our expertly crafted tour packages. 
            From misty mountains to serene beaches, let's create memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="group"
            >
              <Link to="/packages">
                Explore Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="group bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Tour Packages", desc: "Carefully curated experiences" },
              { number: "1000+", label: "Happy Travelers", desc: "Satisfied customers worldwide" },
              { number: "15+", label: "Years Experience", desc: "Trusted travel expertise" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;