import React from "react";

interface MapEmbedProps {
  src?: string;
  className?: string;
}

export default function MapEmbed({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8104609543396!2d80.23481!3d13.05891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzMyLjEiTiA4MMKwMTQnMDUuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  className = "",
}: MapEmbedProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <iframe
        src={src}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Church Location"
        className="w-full"
      />
    </div>
  );
}
