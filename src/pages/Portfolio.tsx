
import { ExternalLink, ArrowRight, Target, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';

const Portfolio = () => {
  const projects = [
    {
      title: "TechCorp Digital Transformation",
      category: "Digital Transformation",
      client: "TechCorp Inc.",
      description: "Complete digital overhaul of legacy systems, resulting in 40% operational efficiency improvement.",
      goals: "Modernize infrastructure, improve efficiency, reduce costs",
      outcomes: "40% efficiency gain, $2M annual savings, 60% faster processing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["Digital Strategy", "Process Automation", "Technology"],
      duration: "8 months",
      teamSize: "12 consultants"
    },
    {
      title: "StartupX Growth Strategy",
      category: "Business Growth",
      client: "StartupX",
      description: "Strategic growth planning that helped scale from 10 to 100 employees while maintaining culture.",
      goals: "Scale team, maintain culture, increase revenue",
      outcomes: "900% team growth, 300% revenue increase, 95% employee satisfaction",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tags: ["Growth Strategy", "Team Building", "Culture"],
      duration: "12 months",
      teamSize: "6 consultants"
    },
    {
      title: "GlobalTech Process Optimization",
      category: "Process Optimization",
      client: "GlobalTech Solutions",
      description: "Streamlined operations across 5 departments, eliminating bottlenecks and improving productivity.",
      goals: "Improve productivity, reduce waste, optimize workflows",
      outcomes: "50% faster delivery, 30% cost reduction, 99% quality improvement",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Process Design", "Efficiency", "Quality"],
      duration: "6 months",
      teamSize: "8 consultants"
    },
    {
      title: "InnovateCo Leadership Development",
      category: "Team Development",
      client: "InnovateCo",
      description: "Comprehensive leadership program that transformed company culture and performance.",
      goals: "Develop leaders, improve culture, increase engagement",
      outcomes: "90% leadership satisfaction, 40% productivity increase, 25% turnover reduction",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Leadership", "Culture", "Performance"],
      duration: "10 months",
      teamSize: "4 consultants"
    },
    {
      title: "FutureFlow Strategic Planning",
      category: "Strategic Planning",
      client: "FutureFlow Inc.",
      description: "5-year strategic roadmap development with quarterly milestones and performance metrics.",
      goals: "Create strategic vision, set clear goals, establish metrics",
      outcomes: "Clear 5-year roadmap, 35% faster decision-making, aligned organization",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["Strategy", "Planning", "Vision"],
      duration: "4 months",
      teamSize: "5 consultants"
    },
    {
      title: "NextGen Risk Management",
      category: "Risk Management",
      client: "NextGen Corp",
      description: "Comprehensive risk assessment and mitigation strategy implementation.",
      goals: "Identify risks, develop mitigation plans, ensure compliance",
      outcomes: "80% risk reduction, 100% compliance, improved resilience",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Risk Assessment", "Compliance", "Security"],
      duration: "7 months",
      teamSize: "7 consultants"
    }
  ];

  const stats = [
    { icon: <Target className="w-8 h-8 text-orange" />, number: "200+", label: "Projects Completed" },
    { icon: <TrendingUp className="w-8 h-8 text-orange" />, number: "$2B+", label: "Revenue Generated" },
    { icon: <Users className="w-8 h-8 text-orange" />, number: "150+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8 text-orange" />, number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-purple-900 to-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-orange">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-200 animate-slide-up">
              Discover how we've helped businesses transform, grow, and achieve extraordinary results 
              across various industries and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCard className="hover:shadow-xl">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <GlassCard className="h-full hover:shadow-2xl transition-all duration-300">
                  <div className="mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">{project.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Goals</h4>
                        <p className="text-gray-600 text-sm">{project.goals}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Outcomes</h4>
                        <p className="text-gray-600 text-sm">{project.outcomes}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600">Client: <span className="font-medium">{project.client}</span></p>
                        <p className="text-sm text-gray-600">Team: {project.teamSize}</p>
                      </div>
                      <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                        View Details
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials in Portfolio Context */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear directly from the businesses we've transformed</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange">TC</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The digital transformation project exceeded all our expectations. Our efficiency improved by 40% and we're saving $2M annually."
              </p>
              <div>
                <h4 className="font-semibold text-navy">Sarah Johnson</h4>
                <p className="text-gray-500 text-sm">CEO, TechCorp</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange">SX</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "BusinessPro helped us scale from 10 to 100 employees while maintaining our startup culture. Incredible results!"
              </p>
              <div>
                <h4 className="font-semibold text-navy">Michael Chen</h4>
                <p className="text-gray-500 text-sm">Founder, StartupX</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange">GT</span>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The process optimization delivered immediate results. We're now 50% faster and our quality has improved to 99%."
              </p>
              <div>
                <h4 className="font-semibold text-navy">Emily Rodriguez</h4>
                <p className="text-gray-500 text-sm">Director, GlobalTech</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar transformational results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange px-8 py-4 text-lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
