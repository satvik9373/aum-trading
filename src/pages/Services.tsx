
import { TrendingUp, Users, Award, Settings, Zap, Shield, ArrowRight, CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-orange" />,
      title: "Business Growth Strategy",
      description: "Comprehensive growth planning and execution to scale your business sustainably.",
      features: ["Market Analysis", "Revenue Optimization", "Expansion Planning", "Performance Metrics"],
      price: "Starting at $5,000"
    },
    {
      icon: <Users className="w-12 h-12 text-orange" />,
      title: "Team Development & Leadership",
      description: "Build high-performing teams and develop leadership capabilities across your organization.",
      features: ["Leadership Training", "Team Building", "Performance Management", "Culture Development"],
      price: "Starting at $3,500"
    },
    {
      icon: <Award className="w-12 h-12 text-orange" />,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology and automation solutions.",
      features: ["Technology Assessment", "Process Automation", "Digital Strategy", "Implementation Support"],
      price: "Starting at $10,000"
    },
    {
      icon: <Settings className="w-12 h-12 text-orange" />,
      title: "Process Optimization",
      description: "Streamline workflows and eliminate inefficiencies to maximize productivity.",
      features: ["Process Mapping", "Bottleneck Analysis", "Workflow Design", "Efficiency Metrics"],
      price: "Starting at $4,000"
    },
    {
      icon: <Zap className="w-12 h-12 text-orange" />,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies that align with your vision and drive results.",
      features: ["Strategic Planning", "Goal Setting", "Roadmap Creation", "Progress Tracking"],
      price: "Starting at $6,000"
    },
    {
      icon: <Shield className="w-12 h-12 text-orange" />,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to protect your organization.",
      features: ["Risk Assessment", "Compliance Audit", "Risk Mitigation", "Crisis Planning"],
      price: "Starting at $4,500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We conduct a thorough analysis of your current situation, challenges, and goals."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Our team creates a customized strategy tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "We develop a detailed roadmap with clear milestones and actionable steps."
    },
    {
      step: "04",
      title: "Execution & Support",
      description: "We work alongside your team to implement solutions and provide ongoing support."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to ensure sustained success and growth."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-purple-900 to-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-orange">Services</span>
            </h1>
            <p className="text-xl text-gray-200 animate-slide-up">
              Comprehensive business solutions designed to drive growth, optimize operations, 
              and transform your organization for sustained success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Tailored solutions for every business challenge</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCard className="h-full">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-lg font-semibold text-orange mb-4">{service.price}</p>
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our proven 5-step process for delivering results</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Process line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-orange/30 -translate-y-1/2"></div>
              
              <div className="grid lg:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                    {/* Step number circle */}
                    <div className="relative z-10 w-16 h-16 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                      {step.step}
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    
                    {/* Arrow for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <ArrowRight className="w-6 h-6 text-orange" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Free Resources</h2>
            <p className="text-xl text-gray-600">Download our guides and tools to get started</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <GlassCard className="text-center">
              <Download className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Business Growth Toolkit</h3>
              <p className="text-gray-600 mb-6">Essential templates and frameworks for scaling your business</p>
              <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                Download PDF
              </Button>
            </GlassCard>
            
            <GlassCard className="text-center">
              <Download className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Digital Transformation Guide</h3>
              <p className="text-gray-600 mb-6">Step-by-step guide to modernizing your operations</p>
              <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                Download PDF
              </Button>
            </GlassCard>
            
            <GlassCard className="text-center">
              <Download className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Leadership Development Playbook</h3>
              <p className="text-gray-600 mb-6">Proven strategies for building high-performing teams</p>
              <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                Download PDF
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange hover:bg-gray-100 px-8 py-4 text-lg">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange px-8 py-4 text-lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
