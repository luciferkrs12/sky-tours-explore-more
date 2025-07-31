import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Thermometer, Calendar, Camera, Mountain, Trees, Coffee, Compass } from "lucide-react";
import yercaudImage from "@/assets/yercaud.jpg";
import ootyImage from "@/assets/ooty.jpg";
import kodaikanalImage from "@/assets/kodaikanal.jpg";
import kolliHillsImage from "@/assets/kolli-hills.jpg";

const Places = () => {
  const destinations = [
    {
      id: 1,
      name: "Yercaud",
      tagline: "The Jewel of the South",
      image: yercaudImage,
      description: "Known as the 'Jewel of the South', Yercaud is a charming hill station in the Shevaroy Hills. Famous for its pleasant climate, coffee plantations, and pristine lake.",
      bestSeason: "October to March",
      temperature: "15°C - 25°C",
      altitude: "1,515 meters",
      attractions: ["Emerald Lake", "Pagoda Point", "Lady's Seat", "Killiyur Falls", "Coffee Plantations"],
      funFacts: [
        "Name means 'Lake surrounded by forests' in Tamil",
        "Famous for its orange groves and coffee estates",
        "Home to the oldest coffee plantation in India"
      ],
      activities: ["Boating", "Trekking", "Photography", "Coffee Tasting"],
      icon: <Coffee className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Kolli Hills",
      tagline: "The Mountain of Death",
      image: kolliHillsImage,
      description: "An ancient and mystical mountain range known for its medicinal plants, waterfalls, and spiritual significance. Less crowded and perfect for nature lovers.",
      bestSeason: "October to March",
      temperature: "18°C - 28°C",
      altitude: "1,300 meters",
      attractions: ["Agaya Gangai Falls", "Arapaleeswarar Temple", "Siddhar Caves", "Seekuparai Viewpoint", "Masila Falls"],
      funFacts: [
        "Has 70 hairpin bends to reach the top",
        "Known for its medicinal herbs and plants",
        "Ancient siddhas meditated in these caves"
      ],
      activities: ["Waterfall Trekking", "Temple Visits", "Cave Exploration", "Bird Watching"],
      icon: <Mountain className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Ooty",
      tagline: "Queen of Hill Stations",
      image: ootyImage,
      description: "The most popular hill station in South India, known for its colonial architecture, tea gardens, and the famous Nilgiri Mountain Railway.",
      bestSeason: "April to June, October to January",
      temperature: "10°C - 25°C",
      altitude: "2,240 meters",
      attractions: ["Botanical Garden", "Doddabetta Peak", "Toy Train", "Tea Gardens", "Rose Garden"],
      funFacts: [
        "UNESCO World Heritage Toy Train",
        "Established by British in 1822",
        "Produces finest Nilgiri tea"
      ],
      activities: ["Toy Train Ride", "Tea Factory Tours", "Golf", "Hiking"],
      icon: <Trees className="h-6 w-6" />
    },
    {
      id: 4,
      name: "Kodaikanal",
      tagline: "Princess of Hill Stations",
      image: kodaikanalImage,
      description: "A serene hill station built around a beautiful star-shaped lake, known for its pleasant climate and scenic beauty throughout the year.",
      bestSeason: "April to June, September to November",
      temperature: "12°C - 25°C",
      altitude: "2,133 meters",
      attractions: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Bear Shola Falls", "Pine Forest"],
      funFacts: [
        "Name means 'Gift of the Forest' in Tamil",
        "Star-shaped lake created artificially in 1863",
        "Famous for homemade chocolates"
      ],
      activities: ["Lake Boating", "Horse Riding", "Cycling", "Nature Walks"],
      icon: <Compass className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="travel-section bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Our Destinations</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Beautiful <span className="gradient-text">Places We Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the most enchanting destinations in Tamil Nadu. Each place has its own unique charm, 
            from misty mountains to pristine lakes and ancient temples.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="travel-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {destinations.map((place, index) => (
              <Card key={place.id} className="group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {place.icon}
                      <span className="ml-2">{place.tagline}</span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground">
                      {place.altitude}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    {place.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {place.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Weather & Season Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Best Season</div>
                        <div className="text-sm text-muted-foreground">{place.bestSeason}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Temperature</div>
                        <div className="text-sm text-muted-foreground">{place.temperature}</div>
                      </div>
                    </div>
                  </div>

                  {/* Top Attractions */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Camera className="h-4 w-4 text-primary mr-2" />
                      Top Attractions
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {place.attractions.slice(0, 4).map((attraction, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{attraction}</span>
                        </div>
                      ))}
                    </div>
                    {place.attractions.length > 4 && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          +{place.attractions.length - 4} more attractions
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Fun Facts */}
                  <div>
                    <h4 className="font-semibold mb-3">Fun Facts</h4>
                    <div className="space-y-2">
                      {place.funFacts.map((fact, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                          <span className="text-sm text-muted-foreground">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="font-semibold mb-3">Popular Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {place.activities.map((activity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <div className="p-6 pt-0">
                  <Button variant="default" className="w-full" size="lg">
                    Explore {place.name} Packages
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Custom Trips Section */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <Badge variant="outline" className="mb-4">Custom Itinerary</Badge>
                <h3 className="text-3xl font-bold mb-4">
                  Can't Find Your Dream Destination?
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  We offer customized tour packages to any destination of your choice. 
                  Tell us where you want to go, and we'll create the perfect itinerary for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg">
                    Plan Custom Trip
                  </Button>
                  <Button variant="outline" size="lg">
                    Get Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Places;