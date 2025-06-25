
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to find your perfect car? Get in touch with our expert team today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-300">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">info@autotrader.com</p>
                <p className="text-gray-300">support@autotrader.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-300">123 Auto Street</p>
                <p className="text-gray-300">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-gray-300">Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-300">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
