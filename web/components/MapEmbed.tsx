import React from "react";

interface MapEmbedProps {
  src?: string;
  className?: string;
}

export default function MapEmbed({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.222796677812!2d80.17244517413364!3d13.085061687240907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263e4bd7b2981%3A0xc41f3bf7faa300ad!2sTrinity%20Worship%20Center!5e0!3m2!1sen!2sin!4v1793768829586!5m2!1sen!2sin",
  className = "",
}: MapEmbedProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
    >
      <iframe
        src={src}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Trinity Worship Center Location"
        className="w-full h-full"
      />
    </div>
  );
}
