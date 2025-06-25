
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

const ReviewCard = ({ name, location, rating, review, avatar }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <img 
          src={avatar} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{location}</p>
        </div>
        <Quote className="w-8 h-8 text-orange-500 ml-auto" />
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`} 
          />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed italic">"{review}"</p>
    </div>
  );
};

export default ReviewCard;
