
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Innovation Through
              <span className="text-yellow-400"> Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We deliver cutting-edge solutions that transform businesses and enhance lives through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
              <img src=
                "dtronics.png"
                alt="Dtronics Logo"
                className="w-90 h-85 rounded-lg object-cover mb-4"></img>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
