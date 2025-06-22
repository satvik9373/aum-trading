import React from "react";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    title: "The Mindset Shift: Cultivating the Psychology of Success",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Building a Personal Brand That Converts",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Capitalizing on Emerging Trends",
    link: "#"
  }
];

const BlogSection = () => (
  <section className="w-full py-20 px-4 bg-gradient-to-br from-[#1E2134] via-[#5D5DFF] to-[#FB5E20]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">Our Blogs</h2>
      <p className="text-center text-lg text-white/80 mb-12 max-w-2xl mx-auto">
        Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/20 shadow-2xl backdrop-blur-xl border border-white/30 flex flex-col overflow-hidden glass-card transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:bg-white/30 cursor-pointer"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-4 text-white">{blog.title}</h3>
              <a href={blog.link} className="mt-auto text-sm text-white/80 hover:text-white transition-colors underline">Read Full Blog &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#FFB347] to-[#FB5E20] text-white shadow-lg hover:scale-105 transition-transform">
          View More
        </button>
      </div>
    </div>
  </section>
);

export default BlogSection; 