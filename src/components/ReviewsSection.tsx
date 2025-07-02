
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Das",
      location: "New York, NY",
      rating: 5,
      review: "Vehicle Rental's website is amazing! Easy EV booking for my trip. Online process was smooth, pickup quick. Car was perfect Excellent service!",
      avatar: "./assets/cuitee.png"
    },
    {
      name: "Anaant todi",
      location: "Los Angeles, CA",
      rating: 5,
      review: "This web platform is a lifesaver! Easily find cars/bikes. Online booking is efficient. Listing my own vehicle via their site is seamless, great for extra cash. Streamlined digital solution, highly recommend!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Chicago, IL",
      rating: 5,
      review: "Rented a bike for a city tour; online experience was flawless. Their site shows great vehicle details. Quick, secure online booking and instant confirmation. Bike was perfect. Super convenient web service!",
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
