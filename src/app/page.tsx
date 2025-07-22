
"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] relative aspect-[1/1]">
        <Image
          src="/assets/logos/logoFondoBlanco.png"
          alt="ayforms logo"
          fill 
          className="object-contain"
          priority
        />
      </div>
      <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 text-center">
        Coming soon...
      </p>
    </div>
  );
}
