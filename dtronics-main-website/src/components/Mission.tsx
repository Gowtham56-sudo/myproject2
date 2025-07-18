
import { Target, Eye, Heart } from "lucide-react";

export const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to innovation and customer satisfaction, we strive to create technology that makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses and individuals with innovative technology solutions that drive growth, efficiency, and success in the digital age.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in technology innovation, creating solutions that shape the future and improve lives worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Customer satisfaction, innovation, integrity, and excellence drive everything we do, ensuring lasting partnerships and superior results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
