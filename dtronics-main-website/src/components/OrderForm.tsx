
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    customizations: "",
    urgentDelivery: false,
    newsletter: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted Successfully!",
      description: "We'll contact you within 24 hours to confirm your order.",
    });
    console.log("Order submitted:", formData);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Place Your Order</CardTitle>
        <CardDescription>
          Fill out the form below to customize and order your products. Our team will contact you to confirm details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="product">Product *</Label>
              <Select onValueChange={(value) => handleChange("product", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="iot-controller">Smart IoT Controller Pro</SelectItem>
                  <SelectItem value="sensor-network">Wireless Sensor Network</SelectItem>
                  <SelectItem value="mobile-app">Mobile Control App</SelectItem>
                  <SelectItem value="cloud-platform">Cloud Data Platform</SelectItem>
                  <SelectItem value="security-gateway">Security Gateway</SelectItem>
                  <SelectItem value="energy-system">Energy Management System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => handleChange("quantity", e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="customizations">Customization Requirements</Label>
            <Textarea
              id="customizations"
              placeholder="Describe any specific customizations or requirements..."
              value={formData.customizations}
              onChange={(e) => handleChange("customizations", e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="urgent"
                checked={formData.urgentDelivery}
                onCheckedChange={(checked) => handleChange("urgentDelivery", checked as boolean)}
              />
              <Label htmlFor="urgent" className="text-sm">
                Urgent delivery required (+₹1000)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
      
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
            Submit Order
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
