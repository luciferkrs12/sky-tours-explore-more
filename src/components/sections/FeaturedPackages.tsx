import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import yercaudImage from "@/assets/yercaud.jpg";
import ootyImage from "@/assets/ooty.jpg";
import kodaikanalImage from "@/assets/kodaikanal.jpg";

const FeaturedPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Yercaud Hills Escape",
      image: yercaudImage,
      duration: "2 Days 1 Night",
      price: "₹8,999",
      originalPrice: "₹12,000",
      rating: 4.8,
      reviews: 124,
      description: "Experience the misty hills and coffee plantations of Yercaud",
      features: ["Emerald Lake", "Pagoda Point", "Coffee Plantation", "Local Cuisine"],
      groupSize: "2-8 People"
    },
    {
      id: 2,
      name: "Ooty Queen of Hills",
      image: ootyImage,
      duration: "3 Days 2 Nights",
      price: "₹15,999",
      originalPrice: "₹20,000",
      rating: 4.9,
      reviews: 89,
      description: "Discover the colonial charm and tea gardens of Ooty",
      features: ["Toy Train", "Botanical Garden", "Doddabetta Peak", "Tea Factory"],
      groupSize: "2-12 People"
    },
    {
      id: 3,
      name: "Kodaikanal Princess",
      image: kodaikanalImage,
      duration: "2 Days 1 Night",
      price: "₹10,999",
      originalPrice: "₹14,000",
      rating: 4.7,
      reviews: 156,
      description: "Enjoy the serene lakes and valleys of Kodaikanal",
      features: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Bear Shola Falls"],
      groupSize: "2-10 People"
    },
  ];

  return (
    <section className="travel-section bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4">Popular Packages</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked tour packages that showcase the best of Tamil Nadu's natural beauty and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={pkg.id} className="group cursor-pointer overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{pkg.groupSize}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Package Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {pkg.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{pkg.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4" />
                  <span>{pkg.reviews} reviews</span>
                </div>
                <Button variant="default" size="sm" asChild>
                  <Link to="/packages">
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/packages">
              View All Packages
              <MapPin className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;