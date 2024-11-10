import { useState } from "react";

import image1 from "../assets/Hero.JPG";
import image2 from "../assets/DSC04302.JPG";
import image3 from "../assets/DSC06188.JPG";

const images = [image1, image2, image3];

const Beranda = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="beranda pb-0 mx-auto">
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          className="w-full h-full object-cover transition-all duration-500"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-4 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 p-4 rounded-full"
        >
          &#10095;
        </button>

        <div className="absolute bottom-16 left-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Halo, Nama gw Hasan</h1>
          <p className="text-xl max-w-lg">
            Programmer junior yang tertarik dengan IoT & AI serta game Developer
            untuk kemajuan teknologi. saat ini sedang menempuh jurusan S1 Teknik
            Informatika di STT Terpadu Nurul Fikri. yang mana saat ini sedang
            menempuh semester 7. menurut saya, kemampuan frontend merupaakan
            kemampuan wajib bagi masing-masing developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
