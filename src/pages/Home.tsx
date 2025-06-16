
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-orange" />,
      title: "Business Growth",
      description: "Strategic consulting to accelerate your business growth and maximize revenue potential."
    },
    {
      icon: <Users className="w-8 h-8 text-orange" />,
      title: "Team Development", 
      description: "Build high-performing teams with our leadership development and training programs."
    },
    {
      icon: <Award className="w-8 h-8 text-orange" />,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions and automation."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange" />,
      title: "Process Optimization",
      description: "Streamline your workflows and eliminate inefficiencies for maximum productivity."
    },
    {
      icon: <Star className="w-8 h-8 text-orange" />,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies that align with your vision and drive results."
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Working with BusinessPro transformed our operations completely. Revenue increased by 40% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupX",
      content: "Their strategic guidance helped us scale from 10 to 100 employees while maintaining our company culture.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director, GlobalTech",
      content: "The process optimization they implemented saved us $2M annually and improved customer satisfaction by 60%.",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechCorp", "StartupX", "GlobalTech", "InnovateCo", "FutureFlow", "NextGen"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-navy via-purple-900 to-navy flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
              Transform Your
              <span className="text-orange block">Business Today</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              We help ambitious companies scale faster and achieve sustainable growth
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-white px-8 py-4 text-lg rounded-full">
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg rounded-full">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Key Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive business solutions designed to drive growth and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCard className="text-center h-full">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-navy mb-4">Trusted by Industry Leaders</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-navy hover:text-orange transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-purple-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Drive Measurable Results
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Our data-driven approach ensures consistent growth and ROI for your business.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">25-50%</h3>
                <p className="text-gray-200">Revenue Increase</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">30%</h3>
                <p className="text-gray-200">Cost Reduction</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">40%</h3>
                <p className="text-gray-200">Productivity Boost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from real businesses</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <GlassCard className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div>
                <h4 className="font-semibold text-navy">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </GlassCard>
            
            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-navy" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6 text-navy" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have accelerated their growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
              Book a Call Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange px-8 py-4 text-lg rounded-full">
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
