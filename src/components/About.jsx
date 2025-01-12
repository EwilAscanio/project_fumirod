import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
              alt="Our Team"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 dark:text-white">
              Acerca de nuestra empresa
            </h2>
            <p className="text-gray-600 mb-6 dark:text-white">
              Con más de 20 años de experiencia en el control de plagas, hemos
              construido nuestra reputación basada en la confianza, la
              confiabilidad y el servicio excepcional. Nuestro Profesionales
              certificados utilizan las últimas técnicas y Soluciones
              respetuosas con el medio ambiente para mantener su espacio libre
              de plagas.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-xl mb-2 dark:text-white">
                  Equipo Certificado
                </h4>
                <p className="text-gray-600 dark:text-white">
                  Profesionales licenciados y capacitados
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-xl mb-2 dark:text-white ">
                  Soporte 24/7
                </h4>
                <p className="text-gray-600 dark:text-white">
                  Siempre disponible para emergencias.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition duration-300"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
