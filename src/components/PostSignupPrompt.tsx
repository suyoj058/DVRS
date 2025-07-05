import React from "react";

interface Props {
  onSelect: (role: "rent" | "list") => void;
}

const PostSignupPrompt: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-6">
          What would you like to do?
        </h2>
        <p className="text-gray-300 mb-8">
          Are you here to{" "}
          <span className="text-orange-500 font-semibold">rent a vehicle</span>
          , or would you like to{" "}
          <span className="text-orange-500 font-semibold">list your own</span>?
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => onSelect("rent")}
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Rent a Vehicle
          </button>
          <button
            onClick={() => onSelect("list")}
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition border border-gray-600"
          >
            List My Vehicle
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostSignupPrompt;
