import React from "react";
import CallBanner from "../other/CallBanner";
export default function ContactHeader() {
  return (
    <section className="bg-cream z-10 font-roboto-condensed text-gray-700">
      <CallBanner />
      <div className="container mx-auto p-8 my-24 text-gray-800">
        <h1 className="text-3xl md:text-4x text-center">Contact</h1>
      </div>
    </section>
  );
}
