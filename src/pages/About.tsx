
import { Users, Target, Eye, Award, CheckCircle, Calendar } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const About = () => {
  const timeline = [
    { year: "2018", event: "Company Founded", description: "Started with a vision to transform businesses" },
    { year: "2019", event: "First 50 Clients", description: "Reached our first major milestone" },
    { year: "2021", event: "International Expansion", description: "Expanded services globally" },
    { year: "2023", event: "200+ Success Stories", description: "Celebrating hundreds of transformations" },
    { year: "2024", event: "Industry Recognition", description: "Award for Business Excellence" }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "15+ years in strategic consulting with Fortune 500 companies",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6c5a055?w=400&h=400&fit=crop"
    },
    {
      name: "David Chen",
      role: "COO",
      bio: "Former McKinsey consultant specializing in operational excellence",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Strategy",
      bio: "MBA from Wharton, expert in digital transformation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "James Wilson",
      role: "Lead Consultant",
      bio: "Technology veteran with 20+ years in business optimization",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Lisa Zhang",
      role: "Head of Innovation",
      bio: "Former Google executive driving digital solutions",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
    },
    {
      name: "Robert Taylor",
      role: "Senior Partner",
      bio: "25+ years experience in mergers and acquisitions",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange" />,
      title: "Results-Driven",
      description: "We measure success by the tangible results we deliver for our clients"
    },
    {
      icon: <Users className="w-8 h-8 text-orange" />,
      title: "Collaborative Approach",
      description: "We work closely with your team to ensure lasting transformation"
    },
    {
      icon: <Award className="w-8 h-8 text-orange" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange" />,
      title: "Integrity",
      description: "Honest, transparent communication in all our relationships"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-purple-900 to-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-orange">BusinessPro</span>
            </h1>
            <p className="text-xl text-gray-200 animate-slide-up">
              We're a team of strategic consultants, technology experts, and business leaders 
              dedicated to helping companies achieve extraordinary growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, BusinessPro emerged from a simple belief: every business has untapped potential 
                waiting to be unleashed. Our founders, having worked with Fortune 500 companies for decades, 
                recognized that many organizations struggle not from lack of ambition, but from lack of 
                strategic clarity and execution excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've helped over 200 companies across various industries transform their operations, 
                accelerate growth, and achieve sustainable success. Our holistic approach combines strategic 
                thinking, operational excellence, and cutting-edge technology to deliver measurable results.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">200+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">$2B+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1560472354-c610e4a96b4b?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-orange"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <GlassCard className="animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-orange" />
                        <h3 className="text-xl font-bold text-navy">{item.year}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.event}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </GlassCard>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-10 h-10 text-orange" />
                  <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600">
                  To empower businesses of all sizes to achieve their full potential through strategic guidance, 
                  innovative solutions, and unwavering commitment to excellence. We believe every organization 
                  deserves access to world-class consulting expertise that drives real, measurable results.
                </p>
              </GlassCard>
            </div>
            
            <div className="animate-slide-up">
              <GlassCard className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="w-10 h-10 text-orange" />
                  <h2 className="text-3xl font-bold text-navy">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600">
                  To be the premier catalyst for business transformation globally, recognized for our ability 
                  to turn ambitious visions into reality. We envision a world where every business thrives 
                  through strategic clarity, operational excellence, and sustainable growth practices.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCard className="text-center h-full">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind your success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <GlassCard className="text-center hover:shadow-2xl transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                  <p className="text-orange font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-purple-900">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-200">Our culture of excellence and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="text-center">
              <Award className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Proven Expertise</h3>
              <p className="text-gray-600">Our team brings decades of experience from top consulting firms and Fortune 500 companies.</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <Users className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Collaborative Partnership</h3>
              <p className="text-gray-600">We work as an extension of your team, ensuring knowledge transfer and sustainable results.</p>
            </GlassCard>
            
            <GlassCard className="text-center">
              <Target className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Results-Focused</h3>
              <p className="text-gray-600">Every engagement is designed to deliver measurable outcomes that drive your business forward.</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
