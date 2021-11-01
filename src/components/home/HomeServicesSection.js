import React from "react";

export default function HomeServicesSection() {
  return (
    <div className="bg-cream font-roboto-condensed text-gray-700 py-12">
      <div className="container mx-auto p-8 sm:border sm:border-black rounded">
        <div className="text-3xl md:text-4xl">Services</div>
        <p className="p-4 text-xl md:text-2xl">
          Whether you are interested in landscape design and installation,
          maintenance services, seasonal color, or hardscape services, our staff
          can help you create anything you desire.
        </p>
        <div className="flex flex-col items-start justify-around md:flex-row">
          <ul className="list-disc p-4 md:text-xl">
            <li>
              Hand pruning of ornamental plant material (some shearing may be
              performed)
            </li>
            <li>Ground cover control e.g. ivy, vinca</li>
            <li>Insect and disease control</li>
            <li>Weed control</li>
            <li>Hand weeding</li>
            <li>Tree maintenance</li>
          </ul>
          <ul className="list-disc p-4 md:text-xl">
            <li>Fertilization of plant material</li>
            <li>Leaf removal</li>
            <li>Deep hand pruning</li>
            <li>Fertilization and weed control</li>
            <li>General landscape cleanup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
