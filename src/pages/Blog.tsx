
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GlassCard from '@/components/GlassCard';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Strategy', 'Digital Transformation', 'Leadership', 'Growth', 'Operations'];

  const blogPosts = [
    {
      title: "The Future of Digital Transformation in 2024",
      excerpt: "Explore the latest trends and technologies shaping digital transformation strategies for modern businesses.",
      category: "Digital Transformation",
      author: "Sarah Mitchell",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Building High-Performance Teams in Remote Environments",
      excerpt: "Learn proven strategies for creating and maintaining effective teams in distributed work settings.",
      category: "Leadership",
      author: "David Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      title: "Strategic Planning for Rapid Business Growth",
      excerpt: "A comprehensive guide to developing and executing growth strategies that deliver sustainable results.",
      category: "Strategy",
      author: "Maria Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      title: "Operational Excellence: Streamlining Your Business Processes",
      excerpt: "Discover how to identify inefficiencies and implement process improvements that drive results.",
      category: "Operations",
      author: "James Wilson",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "The Psychology of Change Management",
      excerpt: "Understanding the human element in organizational transformation and how to lead change effectively.",
      category: "Leadership",
      author: "Lisa Zhang",
      date: "2024-01-05",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
    },
    {
      title: "Data-Driven Decision Making for Small Businesses",
      excerpt: "How to leverage analytics and data insights to make better business decisions, even with limited resources.",
      category: "Strategy",
      author: "Robert Taylor",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Scaling Your Business: When and How to Grow",
      excerpt: "A strategic approach to business scaling that maintains quality while accelerating growth.",
      category: "Growth",
      author: "Sarah Mitchell",
      date: "2024-01-01",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "Customer Experience in the Digital Age",
      excerpt: "Creating exceptional customer experiences through digital touchpoints and personalization.",
      category: "Digital Transformation",
      author: "David Chen",
      date: "2023-12-28",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560472354-c610e4a96b4b?w=600&h=400&fit=crop"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-purple-900 to-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Business <span className="text-orange">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 animate-slide-up">
              Expert insights, strategies, and trends to help you navigate the modern business landscape 
              and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange/10 hover:text-orange'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Featured Article</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <GlassCard className="overflow-hidden animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-orange/10 text-orange rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy">{featuredPost.title}</h3>
                    <p className="text-gray-600 text-lg">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{featuredPost.author}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{featuredPost.readTime}</span>
                      </div>
                      <Button className="bg-orange hover:bg-orange/90 text-white">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Latest Articles</h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <GlassCard className="h-full hover:shadow-xl transition-all duration-300">
                  <div className="mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy hover:text-orange transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-orange text-orange hover:bg-orange hover:text-white">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4 bg-orange hover:bg-orange/90 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-navy to-purple-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-200 mb-8">
              Get the latest business insights and strategies delivered to your inbox weekly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="bg-orange hover:bg-orange/90 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-300 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
