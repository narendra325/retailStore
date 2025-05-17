import React from "react";
import RabbitHero from "../../assets/rabbit-hero.webp";

export const Hero = () => {
  return (
    <section className="relative container mx-auto w-full">
      <img
        src={RabbitHero}
        alt="Rabbit Logo with 2 persons"
        className="w-full h-[350px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-transparent text-2xl  flex flex-col items-center justify-center">
        <div className="text-center text-white ">
          <h1 className="text-4xl md:text-9xl font-bold uppercase mb-4 tracking-tighter">
            VACATION <br /> READY{" "}
          </h1>
        </div>

        <p className="text-white text-sm tracking-tighter mb:text-lg mb-6 ">
          Explore our vacation ready outfits with fast worldwide shipping
        </p>
        <button type="button" class=" bg-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Shop Now</button>
      </div>
    </section>
  );
};
