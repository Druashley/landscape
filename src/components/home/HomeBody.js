import React from "react";
import HomeServicesSection from "./HomeServicesSection";

import ImageCarousel from "./ImageCarousel";
import backgrounWaves from "../../images/layered-waves-haikei.svg";

export default function HomeBody() {
  return (
    <div>
      <div
        className="bg-green-600 -mt-32 min-h-screen font-roboto-condensed text-gray-100 bg-cover md:pb-12 "
        style={{ backgroundImage: `url(${backgrounWaves})` }}
      >
        <div className="pt-60 container mx-auto p-8">
          <h1 className="text-3xl md:text-4xl">Recent Projects</h1>
        </div>
        <ImageCarousel />
      </div>
      <HomeServicesSection />
    </div>
  );
}
