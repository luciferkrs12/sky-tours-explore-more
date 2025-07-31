import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Heart, Quote, Star } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years",
      description: "Travel enthusiast with deep knowledge of Tamil Nadu's hidden gems."
    },
    {
      name: "Priya Sharma",
      role: "Tour Director",
      experience: "12+ years", 
      description: "Expert in creating memorable experiences and customer satisfaction."
    },
    {
      name: "Arun Raj",
      role: "Operations Manager",
      experience: "10+ years",
      description: "Ensures smooth operations and quality service delivery."
    }
  ];

  const testimonials = [
    {
      name: "Anjali Patel",
      location: "Mumbai",
      rating: 5,
      comment: "Amazing experience with Sky Tours! The Ooty package was perfectly planned and executed. Highly recommended!",
      tour: "Ooty Queen of Hills"
    },
    {
      name: "Karthik Reddy",
      location: "Bangalore",
      rating: 5,
      comment: "Professional service and great value for money. The team took care of every detail during our Kodaikanal trip.",
      tour: "Kodaikanal Princess"
    },
    {
      name: "Meera Nair",
      location: "Chennai",
      rating: 5,
      comment: "Wonderful experience exploring Yercaud with family. Kids loved the boat ride and coffee plantation visit!",
      tour: "Yercaud Hills Escape"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Travelers", icon: <Users className="h-8 w-8" /> },
    { number: "50+", label: "Tour Packages", icon: <MapPin className="h-8 w-8" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
    { number: "99%", label: "Customer Satisfaction", icon: <Heart className="h-8 w-8" /> }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="travel-section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, Sky Tours & Travels has been creating unforgettable travel experiences 
            across Tamil Nadu's most beautiful destinations.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="travel-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Memories Since <span className="text-primary">2009</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Sky Tours & Travels was founded with a simple vision: to showcase the incredible beauty 
                  and rich culture of Tamil Nadu to travelers from around the world. What started as a 
                  small family business has grown into one of the most trusted travel agencies in the region.
                </p>
                <p className="text-lg leading-relaxed">
                  Our deep-rooted connection with local communities and extensive knowledge of hidden gems 
                  allows us to offer authentic experiences that go beyond typical tourist destinations. 
                  We believe in responsible tourism that benefits both travelers and local communities.
                </p>
                <p className="text-lg leading-relaxed">
                  From the misty hills of Yercaud to the tea gardens of Ooty, every journey with us is 
                  carefully curated to create lasting memories. Our commitment to excellence and personalized 
                  service has earned us the trust of thousands of satisfied customers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-primary mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="travel-section bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional travel experiences that showcase the natural beauty, 
                  rich culture, and warm hospitality of Tamil Nadu while promoting sustainable 
                  and responsible tourism practices.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred travel partner in South India, 
                  known for creating authentic, memorable, and transformative travel experiences 
                  that connect people with places and cultures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="travel-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">People</span> Behind Sky Tours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced team is passionate about travel and dedicated to making your journey exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <Badge variant="outline" className="mb-3">{member.experience}</Badge>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="travel-section bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Travelers</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read genuine reviews from our satisfied customers who have experienced the magic of Tamil Nadu with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-primary mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{testimonial.tour}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="travel-section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of satisfied travelers who have explored Tamil Nadu with us. 
            Let's create your perfect travel experience together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              View Packages
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;