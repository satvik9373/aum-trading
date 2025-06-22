import React from "react";

const VideoSection = () => (
  <section className="w-full bg-white relative overflow-hidden h-[85vh] md:h-[95vh] flex items-center justify-center" style={{marginTop: '2rem', marginBottom: '2rem'}}>
    <video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      className="absolute inset-0 w-full h-full object-cover shadow-2xl"
      style={{ aspectRatio: '16/9' }}
    />
  </section>
);

export default VideoSection; 