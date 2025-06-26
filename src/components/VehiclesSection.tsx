
import VehicleCard from './VehicleCard';
import { Button } from '@/components/ui/button';

const VehiclesSection = () => {
  const vehicles = [
    {
      id: 1,
      name: "BMW X5 xDrive40i",
      price: 10000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
      year: 2021,
      mileage: 25000,
      fuelType: "Gasoline",
      seats: 7,
      type: 'rent' as const
    },
    {
      id: 2,
      name: "Mercedes-Benz C-Class",
      price: 15000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
      year: 2022,
      mileage: 15000,
      fuelType: "Gasoline",
      seats: 5,
      type: 'rent' as const
    },
    {
      id: 3,
      name: "Audi A8 L",
      price: 6500,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
      year: 2020,
      mileage: 30000,
      fuelType: "Gasoline",
      seats: 5,
      type: 'rent' as const
    },
    {
      id: 4,
      name: "Tesla Model S",
      price: 2000,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop",
      year: 2023,
      mileage: 5000,
      fuelType: "Electric",
      seats: 5,
      type: 'rent' as const
    },
    {
      id: 5,
      name: "Porsche 911 Carrera",
      price: 8500,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop",
      year: 2021,
      mileage: 18000,
      fuelType: "Gasoline",
      seats: 4,
      type: 'rent' as const
    },
    {
      id: 6,
      name: "Range Rover Evoque",
      price: 3000,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop",
      year: 2022,
      mileage: 1200,
      fuelType: "Gasoline",
      seats: 5,
      type: 'rent' as const
    }
  ];

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BEST <span className="text-orange-500">VEHICLES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of vehicles available for rental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
