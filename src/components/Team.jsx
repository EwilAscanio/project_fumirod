import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const team = [
    {
      name: "Roberto Díaz",
      role: "Director General",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "Con más de 15 años de experiencia en control de plagas y gestión empresarial.",
    },
    {
      name: "Diana Morales",
      role: "Supervisora de Operaciones",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "Especialista certificada en control de plagas y gestión de equipos.",
    },
    {
      name: "Luis Pérez",
      role: "Técnico Senior",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      bio: "Experto en fumigación y control integrado de plagas.",
    },
    {
      name: "Carmen Ruiz",
      role: "Atención al Cliente",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Dedicada a brindar la mejor experiencia a nuestros clientes.",
    },
  ];

  return (
    <section className="py-20" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-accent dark:text-white">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            Profesionales comprometidos con tu tranquilidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                  <div className="flex space-x-4 mb-4">
                    <a
                      href="#"
                      className="text-white hover:text-primary transition duration-300"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-primary transition duration-300"
                    >
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-accent dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary dark:text-secondary">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
