
import { ProductCatalog } from "@/components/ProductCatalog";
import { OrderForm } from "@/components/OrderForm";

const Services = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services & Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of technology solutions designed to meet your specific needs.
          </p>
        </div>
        
        <ProductCatalog />
        <OrderForm />
      </div>
    </div>
  );
};

export default Services;
