import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      content: "123 Travel Street, Anna Nagar, Chennai, Tamil Nadu 600040",
      action: "Get Directions"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+91 98765 43210",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "info@skytours.com",
      action: "Send Email"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM\nSun: 10:00 AM - 5:00 PM",
      action: "View Calendar"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "#" }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="travel-section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="gradient-text">Sky Tours</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to plan your next adventure? We're here to help you create the perfect travel experience. 
            Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="travel-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">{info.content}</p>
                  <Button variant="outline" size="sm" className="text-xs">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name *</label>
                        <Input placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email Address *</label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Interested Destination</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yercaud">Yercaud</SelectItem>
                            <SelectItem value="ooty">Ooty</SelectItem>
                            <SelectItem value="kodaikanal">Kodaikanal</SelectItem>
                            <SelectItem value="kolli-hills">Kolli Hills</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Travel Dates (Optional)</label>
                      <Input type="date" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Number of Travelers</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3-5">3-5 People</SelectItem>
                          <SelectItem value="6-10">6-10 People</SelectItem>
                          <SelectItem value="10+">10+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea 
                        placeholder="Tell us about your travel requirements, preferences, or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Travel Street, Anna Nagar, Chennai</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Open in Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>Emergency Support</span>
                      </div>
                      <Button variant="outline" size="sm">Call Now</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>Quick Query</span>
                      </div>
                      <Button variant="outline" size="sm">Email Us</Button>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-3">Follow Us</h4>
                      <div className="flex space-x-3">
                        {socialLinks.map((social, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="icon"
                            className="hover:bg-primary hover:text-white transition-colors"
                          >
                            {social.icon}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm">How far in advance should I book?</h4>
                      <p className="text-xs text-muted-foreground mt-1">We recommend booking 2-4 weeks in advance for best availability.</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm">Do you offer group discounts?</h4>
                      <p className="text-xs text-muted-foreground mt-1">Yes, we offer special rates for groups of 8 or more people.</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm">What's included in packages?</h4>
                      <p className="text-xs text-muted-foreground mt-1">Accommodation, meals, transport, and guided tours as specified.</p>
                    </div>
                  </div>
                  <Button variant="link" className="mt-3 p-0">
                    View All FAQs →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;