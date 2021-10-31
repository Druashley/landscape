import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function HomeBody() {
  return (
    <div className="bg-green-600 -mt-32 min-h-screen font-roboto-condensed text-gray-100">
      <div className="pt-60 container mx-auto p-8">
        <h1 className="text-3xl md:text-4xl">Recent Project</h1>
      </div>
      <ImageCarousel />
    </div>
  );
}
