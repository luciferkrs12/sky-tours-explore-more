import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star, Calendar, Camera } from "lucide-react";
import yercaudImage from "@/assets/yercaud.jpg";
import ootyImage from "@/assets/ooty.jpg";
import kodaikanalImage from "@/assets/kodaikanal.jpg";
import kolliHillsImage from "@/assets/kolli-hills.jpg";

const Packages = () => {
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
      description: "Experience the misty hills and coffee plantations of Yercaud with comfortable accommodation and guided tours.",
      features: ["Emerald Lake Boating", "Pagoda Point Sunset", "Coffee Plantation Tour", "Local Cuisine Tasting", "Nature Walk"],
      groupSize: "2-8 People",
      includes: ["Accommodation", "Meals", "Transportation", "Guide"],
      season: "Oct - Mar"
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
      description: "Discover the colonial charm and tea gardens of Ooty with luxury accommodation and exclusive experiences.",
      features: ["Toy Train Journey", "Botanical Garden Visit", "Doddabetta Peak", "Tea Factory Tour", "Rose Garden"],
      groupSize: "2-12 People",
      includes: ["Luxury Hotel", "All Meals", "Private Transport", "Entry Tickets"],
      season: "Apr - Jun, Oct - Jan"
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
      description: "Enjoy the serene lakes and valleys of Kodaikanal with comfortable stays and scenic boat rides.",
      features: ["Kodai Lake Boating", "Coaker's Walk", "Pillar Rocks View", "Bear Shola Falls", "Pine Forest"],
      groupSize: "2-10 People",
      includes: ["Hotel Stay", "Breakfast & Dinner", "Sightseeing", "Boat Ride"],
      season: "Apr - Jun, Sep - Nov"
    },
    {
      id: 4,
      name: "Kolli Hills Adventure",
      image: kolliHillsImage,
      duration: "2 Days 1 Night",
      price: "₹9,499",
      originalPrice: "₹13,000",
      rating: 4.6,
      reviews: 67,
      description: "Explore the mystical Kolli Hills with ancient temples, waterfalls and panoramic valley views.",
      features: ["Agaya Gangai Falls", "Arapaleeswarar Temple", "Siddhar Caves", "Valley Viewpoints", "Tribal Village"],
      groupSize: "2-8 People",
      includes: ["Accommodation", "Meals", "Transport", "Temple Entry"],
      season: "Oct - Mar"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="travel-section bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Tour Packages</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Our <span className="gradient-text">Travel Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Carefully crafted tour packages to showcase the best destinations in Tamil Nadu. 
            From hill stations to cultural sites, find your perfect getaway.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="travel-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={pkg.id} className="group overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-sm text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Package Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{pkg.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{pkg.groupSize}</div>
                        <div className="text-sm text-muted-foreground">Group Size</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{pkg.season}</div>
                        <div className="text-sm text-muted-foreground">Best Season</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Camera className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{pkg.features.length}</div>
                        <div className="text-sm text-muted-foreground">Attractions</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Package Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes */}
                  <div>
                    <h4 className="font-semibold mb-3">Package Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-6">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="travel-section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Can't find the perfect package? Let us create a custom itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Customize Package
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;