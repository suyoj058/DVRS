
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      review: "Absolutely fantastic service! Found my dream car within my budget. The team was professional and helpful throughout the entire process.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 5,
      review: "Great experience renting a luxury car for my business trip. Clean, well-maintained vehicle and excellent customer service.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Chicago, IL",
      rating: 5,
      review: "Bought my first car from AutoTrader and couldn't be happier. Transparent pricing and no hidden fees. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="text-orange-500">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
