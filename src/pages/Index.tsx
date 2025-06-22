import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Aurora from "@/components/Aurora";
import VideoSection from "@/components/VideoSection";
import AchievementsSection from "@/components/AchievementsSection";
import FeaturesGridSection from "@/components/FeaturesGridSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 flex flex-col items-center"
      >
        <div className="absolute inset-0 z-[-1]">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="block mb-4 px-4 py-1.5 rounded-full glass mx-auto"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            All-in-one trading platform
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
            <span className="text-gray-200">
              <TextGenerateEffect words="Learn to Trade in Equity, Forex, Crypto & F&O – All Under One Roof." />
            </span>
            <br />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Empowering You to Trade Smartly, Confidently, and Profitably.{" "}
            <span className="text-white">Start your trading journey today.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button size="lg" className="button-gradient">
              Start Trading Now
            </Button>
            <Button size="lg" variant="link" className="text-white">
              View Markets <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Section */}
      <VideoSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Features Grid Section */}
      <FeaturesGridSection />

      {/* Features Section */}
      <div id="features" className="bg-background">
        <FeaturesSection />
      </div>

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
