import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import foto1 from "../../public/Foto1.jpg";
import foto2 from "../../public/Foto2.jpg";
import foto3 from "../../public/Foto3.jpg";
import foto4 from "../../public/Foto4.jpg";

const Hero = () => {
  const slides = [
    {
      image: foto1,
      // 'https://images.unsplash.com/photo-1635340749697-fee4d0f810dd',
      title: "Soluciones Profesionales para la Fumigacion",
      subtitle: "Protejemos tu casa y empresa",
    },
    {
      image: foto2,
      // "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50"
      title: "Expertos en Servicio de Fumigacion",
      subtitle: "Tratamiento Efectivo y Seguro",
    },
    {
      image: foto3,
      // "https://images.unsplash.com/photo-1604798498937-d76c1627b218"
      title: "24/7 Servicio de Fumigacion",
      subtitle: "Experiencia en el Servicio",
    },
    {
      image: foto4,
      // "https://images.unsplash.com/photo-1604798498937-d76c1627b218"
      title: "Eliminación de Plagas",
      subtitle: "Combatimos todo tipo de Plagas",
    },
  ];

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white max-w-3xl"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                    <a
                      href="#contact"
                      className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
                    >
                      Solicita tu Cotizacion
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;