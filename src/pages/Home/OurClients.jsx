import React from "react";
import Marquee from "react-fast-marquee";

// Import client logos
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import start from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const clientLogos = [casio, amazon, moonstar, start, startPeople, randstad];

const OurClients = () => {
  return (
    <section className="py-10 px-2 md:px-8 rounded-none container mx-auto">
      <h2
        className="text-primary text-xl md:text-2xl font-bold text-center mb-2 mt-2 md:mt-0"
        style={{ letterSpacing: 0 }}
      >
        We've helped thousands of sales teams
      </h2>
      <div className="overflow-hidden w-full my-8">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="py-2"
        >
          {clientLogos?.map((logo, idx) => (
            <div key={idx} className="mx-12 flex items-center">
              <img
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-6 md:h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurClients;
