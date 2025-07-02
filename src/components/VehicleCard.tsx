import React from 'react';
import { Heart, Eye, Calendar, Gauge, Fuel, Users } from 'lucide-react';
import { Button } from '@/components/ui/button'; // adjust import to your project
import { useNavigate } from 'react-router-dom';

interface VehicleCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  year: number;
  mileage: number;
  fuelType: string;
  seats: number;
  type: 'rent';
}

const VehicleCard = ({
  id,
  name,
  price,
  image,
  year,
  mileage,
  fuelType,
  seats,
  type,
}: VehicleCardProps) => {
  const navigate = useNavigate();

  const handleRentNow = () => {
    navigate('/rent-now', {
      state: {
        vehicleName: name,
        vehicleId: id,
        price,
        image,
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-orange-500">
            रु{price.toLocaleString()}
            {type === 'rent' && (
              <span className="text-sm text-gray-500">/day</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="w-4 h-4" />
            <span>{mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{seats} seats</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={handleRentNow}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
          >
            Rent Now
          </Button>

          <Button
            variant="outline"
            className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
