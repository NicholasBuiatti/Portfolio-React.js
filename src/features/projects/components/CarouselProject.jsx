import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CarouselProject = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);
  const itemsPerView = 4;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setItemWidth(containerWidth / itemsPerView);
    }
  }, []);

  const nextSlide = () => {
    const newIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    if (newIndex > carouselIndex + itemsPerView - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else if (newIndex === 0) {
      setCarouselIndex(0);
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

    if (newIndex < carouselIndex) {
      setCarouselIndex(carouselIndex - 1);
    } else if (newIndex === images.length - 1) {
      setCarouselIndex(images.length - itemsPerView);
    }
  };

  const translateX = -(carouselIndex * itemWidth);

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      {/* Immagine grande sopra */}
      <motion.div
        key={images[currentIndex]?.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 flex justify-center"
      >
        <img
          src={images[currentIndex]?.image_path}
          alt={`Project ${currentIndex + 1}`}
          className="object-contain h-96 rounded-md"
        />
      </motion.div>

      {/* Carosello di miniature sotto */}
      <div className="relative">
        <div ref={containerRef} className="overflow-hidden rounded-lg border">
          <motion.div
            className="flex"
            animate={{ x: translateX }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {images.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 p-2"
                style={{ width: `${100 / itemsPerView}%` }}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={item.image_path}
                  alt={`Project ${index + 1}`}
                  className={`w-full h-24 object-cover rounded-md cursor-pointer transition-transform ${
                    index === currentIndex
                      ? "ring-2 ring-blue-500 scale-105"
                      : "hover:scale-105"
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Frecce */}
        <div className="flex gap-2 justify-end mt-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Immagine precedente"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Prossima immagine"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselProject;
