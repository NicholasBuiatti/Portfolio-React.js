import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { items } from '@/components/website/constant';

const CarouselProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);
  const itemsPerView = 3; // Numero di immagini visibili contemporaneamente

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setItemWidth(containerWidth / itemsPerView);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev >= items.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? items.length - itemsPerView : prev - 1
    );
  };

  const translateX = -(currentIndex * itemWidth);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Container principale con overflow nascosto */}
      <div 
        ref={containerRef}
        className="overflow-hidden rounded-lg border dark:bg-gray-900/60 bg-gray-100/60"
      >
        {/* Contenitore scorrevole delle immagini */}
        <motion.div 
          className="flex"
          animate={{ x: translateX }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
        >
          {items.map((item, index) => (
            <div 
              key={item.id}
              className="flex-shrink-0 p-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Image
                src={item.url}
                width={400}
                height={300}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controlli frecce in basso a destra */}
      <div className="flex gap-2 justify-end mt-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Immagine precedente"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Prossima immagine"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicatori opzionali */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(items.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index
                ? 'bg-blue-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselProject;





// import { useEffect, useRef, useState } from 'react';
// import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
// import Image from 'next/image';
// import { items } from '@/components/website/constant';

// const CarouselProject = () => {
//   const [activeItem, setActiveItem] = useState(items[0]);
//   const [width, setWidth] = useState(0);
//   const carousel = useRef(null);
//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }, [carousel]);

//   return (
//     <>
//       <motion.div
//         layoutId={'activeItems'}
//         className='rounded-md w-fit pb-4 gap-2 items-center mx-auto cursor-auto '
//         onClick={(e) => e.stopPropagation()}
//       >
//         <>
//           {items.map((tab, index) => (
//             <>
//               <AnimatePresence mode='popLayout' initial={false}>
//                 {tab.id === activeItem.id && (
//                   <motion.figure
//                     key={tab?.id}
//                     className='dark:bg-gray-900/60 bg-gray-100/60 border  rounded-md p-4 backdrop-blur-sm'
//                   >
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{
//                         opacity: 1,
//                         transition: {
//                           type: 'ease',
//                           ease: 'easeInOut',
//                           duration: 0.3,
//                           delay: 0.2,
//                         },
//                       }}
//                       exit={{
//                         opacity: 0,
//                         transition: {
//                           type: 'ease',
//                           ease: 'easeInOut',
//                           duration: 0.2,
//                         },
//                       }}
//                     >
//                       <Image
//                         src={activeItem.url}
//                         width={1000}
//                         height={1000}
//                         alt='preview_img'
//                         className=' object-contain h-96  mx-auto rounded-md'
//                       />
//                     </motion.div>
//                   </motion.figure>
//                 )}
//               </AnimatePresence>
//             </>
//           ))}
//         </>
//         <motion.div className='w-[550px] mt-4 mx-auto overflow-hidden   dark:bg-gray-900/60 bg-gray-100/60 border rounded-md'>
//           <motion.div
//             ref={carousel}
//             drag='x'
//             dragElastic={0.2}
//             dragConstraints={{ right: 0, left: -width }}
//             dragTransition={{ bounceDamping: 30 }}
//             transition={{ duration: 0.2, ease: 'easeInOut' }}
//             className='flex  '
//           >
//             {items.slice(0, 8)?.map((itemData, index) => {
//               return (
//                 <motion.div
//                   key={itemData?.id}
//                   className={`relative p-2 flex-shrink-0`}
//                   onClick={() => setActiveItem(itemData)}
//                 >
//                   <Image
//                     src={itemData?.url}
//                     width={400}
//                     height={400}
//                     alt='img'
//                     className='w-28 h-16 object-cover cursor-pointer relative z-[2] rounded-md pointer-events-none'
//                   />
//                   {itemData?.id === activeItem?.id && (
//                     <motion.div
//                       layoutId='slider'
//                       transition={{
//                         layout: {
//                           duration: 0.2,
//                           ease: 'easeOut',
//                         },
//                       }}
//                       className='absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md'
//                     ></motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }

// export default CarouselProject;
