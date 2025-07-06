import React from "react";
import { useNavigate } from "react-router-dom";

const VehicleDetailsForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your form submission logic here, e.g., send data to your backend API

    alert("Vehicle details submitted successfully!");
    navigate("/"); // Redirect to homepage after submit
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-4 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Add Your <span className="text-orange-500">Vehicle</span> Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Type, Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="type"
              placeholder="Vehicle Type (Car, Bike, SUV, etc.)"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand / Make (e.g., Toyota, Honda)"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
            />
          </div>

          {/* Row 2: Model, Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="model"
              placeholder="Model (e.g., Swift, Pulsar 220)"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Year of Manufacture"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
              min={1900}
              max={new Date().getFullYear()}
            />
          </div>

          {/* Row 3: Fuel, Transmission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="fuel"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 w-full"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Fuel Type
              </option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
            </select>

            <select
              name="transmission"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 w-full"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Transmission
              </option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
          </div>

          {/* Row 4: Color, Reg. No */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="color"
              placeholder="Color"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
            />
            <input
              type="text"
              name="reg_number"
              placeholder="Registration Number"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
            />
          </div>

          {/* Row 5: Odometer, Capacity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="odometer"
              placeholder="Odometer Reading (in KM)"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
              min={0}
            />
            <input
              type="number"
              name="seating"
              placeholder="Seating Capacity"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 placeholder-gray-400 w-full"
              required
              min={1}
            />
          </div>

          {/* Row 6: AC, GPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="ac"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 w-full"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Air Conditioning
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <select
              name="gps"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 w-full"
              required
              defaultValue=""
            >
              <option value="" disabled>
                GPS / Tracking Available
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold rounded-lg transition"
          >
            Submit Vehicle
          </button>
        </form>
      </div>
    </section>
  );
};

export default VehicleDetailsForm;
