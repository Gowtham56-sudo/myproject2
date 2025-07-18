
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    console.log("Contact form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll respond as soon as possible.
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

          <div>
            <Label htmlFor="inquiryType">Inquiry Type</Label>
            <Select onValueChange={(value) => handleChange("inquiryType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="product">Product Information</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="quote">Request Quote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Please describe your inquiry in detail..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="min-h-[120px]"
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
