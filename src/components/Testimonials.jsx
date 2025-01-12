import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Propietaria de Restaurante",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "FUMIROD C.A. transformó completamente nuestro restaurante. Su servicio profesional y eficiente nos ayudó a mantener los más altos estándares de higiene.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente de Hotel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      text: "Excelente servicio y atención al cliente. El equipo de FUMIROD siempre está disponible y responde rápidamente a nuestras necesidades.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Dueña de Casa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "Muy satisfecha con el servicio de fumigación. Personal profesional y resultados duraderos. Totalmente recomendado.",
      rating: 5,
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
      scale: 0.9,
      rotateX: -15,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const quoteVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const ratingVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-accent/5 to-transparent"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-accent dark:text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Testimonios
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Lo que dicen nuestros clientes sobre nosotros
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary border-opacity-20 transform-gpu backdrop-blur-sm"
            >
              <motion.div
                className="text-primary mb-4"
                variants={quoteVariants}
                initial="initial"
                whileInView="animate"
              >
                <FaQuoteLeft className="text-3xl" />
              </motion.div>

              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {testimonial.text}
              </motion.p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={ratingVariants}
                    initial="initial"
                    whileInView="animate"
                  >
                    <FaStar className="text-primary" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative w-12 h-12 mr-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-primary border-opacity-50" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
