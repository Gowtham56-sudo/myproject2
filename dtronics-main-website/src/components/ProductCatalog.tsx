
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cpu, Wifi, Smartphone, Database, Shield, Zap } from "lucide-react";

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Smart IoT Controller Pro",
      category: "iot",
      description: "Advanced IoT device controller with cloud integration, real-time monitoring, and edge computing capabilities.",
      specifications: ["ARM Cortex-A9 Processor", "2GB RAM", "Wi-Fi 6 & Bluetooth 5.0", "IP65 Rating"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      price: "₹5000",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Wireless Sensor Network",
      category: "sensors",
      description: "Comprehensive sensor network solution for industrial monitoring and environmental data collection.",
      specifications: ["LoRaWAN Protocol", "10-year Battery Life", "Temperature & Humidity", "Customizable Range"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      price: "₹5000",
      icon: <Wifi className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Mobile Control App",
      category: "software",
      description: "Intuitive mobile application for controlling and monitoring all your smart devices from anywhere.",
      specifications: ["iOS & Android", "Real-time Alerts", "Voice Control", "Offline Mode"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      price: "₹5000",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 4,
      name: "Cloud Data Platform",
      category: "software",
      description: "Scalable cloud platform for data analytics, machine learning, and business intelligence.",
      specifications: ["99.9% Uptime", "Auto-scaling", "ML Integration", "API Gateway"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      price: "₹5000",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 5,
      name: "Security Gateway",
      category: "security",
      description: "Enterprise-grade security gateway with advanced threat protection and network monitoring.",
      specifications: ["Firewall Protection", "VPN Support", "DDoS Protection", "24/7 Monitoring"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      price: "₹5000",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 6,
      name: "Energy Management System",
      category: "iot",
      description: "Smart energy monitoring and management system for optimizing power consumption.",
      specifications: ["Real-time Monitoring", "Energy Analytics", "Cost Optimization", "Smart Scheduling"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      price: "₹5000",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="mb-16">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Product Catalog</h2>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="iot">IoT Solutions</SelectItem>
            <SelectItem value="sensors">Sensors</SelectItem>
            <SelectItem value="software">Software</SelectItem>
            <SelectItem value="security">Security</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Badge className="absolute top-4 right-4 bg-blue-600 capitalize">
                {product.category}
              </Badge>
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  {product.icon}
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Specifications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.specifications.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Order Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
