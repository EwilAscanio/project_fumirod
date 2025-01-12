import { motion } from "framer-motion";
import { FaBug, FaSpider, FaHome } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBug className="text-4xl" />,
      title: "Control general de plagas",
      description:
        "Soluciones integrales para todas las plagas domésticas comunes.",
    },
    {
      icon: <FaSpider className="text-4xl" />,
      title: "Tratamientos Especializados",
      description:
        "Soluciones específicas para problemas específicos de plagas.",
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: "Residencial & Comercial",
      description: "Servicios a medida para hogares y empresas.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Soluciones profesionales de control de plagas para cada situación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
