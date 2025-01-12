import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Hero = () => {
  const foto1 =
    "https://img.freepik.com/foto-gratis/persona-traje-blanco-proteccion-quimica-realizando-desinfeccion-control-plagas-rociando-veneno-matar-insectos-roedores_342744-932.jpg?t=st=1736707878~exp=1736711478~hmac=4924397c59b9261ee1ef8dc7e1043381d09199dc415d17713b3c13fd1b322077&w=1380";

  const foto2 =
    "https://img.freepik.com/foto-gratis/persona-traje-blanco-proteccion-quimica-que-desinfecta-pasillos-publicos-pasos-detener-propagacion-virus-corona-altamente-contagioso_342744-861.jpg?t=st=1736707312~exp=1736710912~hmac=1dd4c990f6dbf80e0974d33c74b5ef9a6922750d8954499fa181909581ce53e6&w=1380";

  const foto3 =
    "https://img.freepik.com/foto-gratis/pandemia-coronavirus-desinfectante-traje-protector-mascarilla-rocia-desinfectantes-casa-u-oficina_155003-42349.jpg?t=st=1736707848~exp=1736711448~hmac=8ff950ce965d2c0d54e24d5c7aa7a288f78fcb3f3339aa5629a17da33442e711&w=1380";

  const foto4 =
    "https://img.freepik.com/foto-gratis/hombre-esta-utilizando-maquina-niebla-termica-proteger-propagacion-mosquitos_1150-6242.jpg?t=st=1736707801~exp=1736711401~hmac=2c63c2b1f97a97a0fdc5fd65e82eca98a29428c9da413e0ab26a9c13d9163e24&w=1380";

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
