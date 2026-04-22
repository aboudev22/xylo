"use client";

import { Navbar } from "../Molecules/Navbar";

export const HeroSection = () => {
  return (
    <section className="h-screen w-screen bg-linear-to-t from-blue-50 to-blue-300">
      <Navbar />

      <div className="w-full px-50 justify-center items-center">
        <h1 className="text-7xl px-50 text-center font-black mt-10 text-white">
          Simplifiez la gestion de vos projets en équipe
        </h1>

        <p className="text-center mt-6 text-lg text-neutral-100 max-w-2xl mx-auto">
          Organisez vos tâches, collaborez en temps réel et suivez
          l&apos;avancement de vos projets dans un espace unique, clair et
          efficace.
        </p>
      </div>
    </section>
  );
};
