
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
          <CardDescription>
            Multiple ways to reach out to us. We're here to help!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">dtronicsfuturetechsolutions@gmail.com</p>
              <p className="text-gray-600">support@dtronicsfuturetech.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+91 99523 15483</p>
              <p className="text-gray-600">+92 81227 44792</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">Rana nagar,KuruppanaickenPalayam</p>
              <p className="text-gray-600">Bhavani,Erode-638301</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
              <p className="text-gray-600">Saturday: 10AM - 4PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-blue-600" />
            <span>www.dtronicsfuturetechsolutions.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <span>Live Chat Available</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Office Location</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
