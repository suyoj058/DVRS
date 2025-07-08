
import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Want to{' '}
          {/* <span className="text-orange-500">Buy</span> */}
          {/* {' '}or{' '} */}
          <span className="text-orange-500">Rent</span>
          <br />
          a vechicle?
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Your Trusted Partner for vehicle rent.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-left block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Select>
                  <SelectTrigger className="pl-10 h-12">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dharan">dharan</SelectItem>
                    <SelectItem value="Biratnagar">Biratnagar</SelectItem>
                    <SelectItem value="Pokhara">Pokhara</SelectItem>
                    <SelectItem value="kathamandu">kathamandu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-left block">Car Type</label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Bike</SelectItem>
                  <SelectItem value="suv">Car</SelectItem>
                  <SelectItem value="sports">EV</SelectItem>
                  <SelectItem value="luxury">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-semibold text-left block">Budget Range</label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5k">रु0 - रु5,000</SelectItem>
                  <SelectItem value="10-30k">रु10,000 - रु30,000</SelectItem>
                  <SelectItem value="30k-60k">रु30,000 - रु60,000</SelectItem>
                  <SelectItem value="60k+">रु60,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
            <Search className="w-5 h-5 mr-2" />
            Search Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
