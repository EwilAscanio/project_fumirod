import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: "Teléfono",
      info: "+58 (414) 402-1255",
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: "Correo",
      info: "contacto@fumirod.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: "Dirección",
      info: "Valencia Edo Carabobo, Venezuela",
    },
  ];

  return (
    <section className="py-20 bg-accent bg-opacity-5" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-accent dark:text-white">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            Estamos aquí para ayudarte con tus necesidades de control de plagas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary border-opacity-20">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-accent text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-accent text-sm font-medium mb-2">
                      Correo
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-accent text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-accent text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 resize-none"
                    placeholder="Cuéntanos sobre tus necesidades de fumigación..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-medium px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Enviar Mensaje
                </button>
                {status === "success" && (
                  <p className="text-primary text-center font-medium">
                    ¡Gracias! Nos pondremos en contacto contigo pronto.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full border-2 border-primary border-opacity-20">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Información de Contacto
              </h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-accent">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent bg-opacity-5 rounded-lg">
                <h4 className="font-medium text-accent mb-2">
                  Horario de Atención
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábado: 9:00 AM - 4:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
