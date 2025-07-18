
import { Award, Users, Globe, Star } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "MSME UDAYAAM Certified",
      description: "Quality management system certification"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "10,000+ Customers",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "50+ Countries",
      description: "Global presence and support"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "4.9/5 Rating",
      description: "Customer satisfaction score"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "500+", label: "Projects" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition and milestones that demonstrate our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
