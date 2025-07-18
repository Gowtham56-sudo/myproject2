
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Wifi, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smart IoT Controller",
      description: "Advanced IoT device controller with cloud integration and real-time monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      price: "₹9999",
      badge: "Best Seller",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Wireless Sensor Network",
      description: "Comprehensive sensor network solution for industrial and commercial applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      price: "₹9999",
      badge: "Popular",
      icon: <Wifi className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Mobile Control App",
      description: "Intuitive mobile application for controlling and monitoring all your smart devices.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      price: "₹9999",
      badge: "New",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our top-performing products that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            <Link to="/services" className="flex items-center">
              View All Products
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
