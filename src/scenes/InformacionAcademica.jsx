import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const InforAcademica = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        Cambia tus pensamientos y cambiarás tu mundo (Norman Vincent Peale)
        </p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const InformacionAcademica = () => {
  return (
    <section id="informacionacademica" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">Informacion </span>Academica
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          La verdadera educación consiste en obtener lo mejor de uno mismo (Mahatma Gandhi)
        </p>
      </motion.div>

      {/* InformacionesAcademicas */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            INSTITUCIONES 
          </div>
          <InforAcademica title="Primaria" />
          <InforAcademica title="Secundaria" />

          {/* ROW 2 */}
          <InforAcademica title="Tecnica" />
          <InforAcademica title="Diplomado" />
          <InforAcademica title="Pregrado" />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Basica primaria (2003 - 2009) - Pedro Octavio Amado
          </div>

          <div
            className="flex justify-center text-center items-center p-10 bg-purple-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Basica Secundaria (2010 - 2015) - Debora Arango Perez
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Tecnica en sistemas (2013-2015) - Servicio nacional de aprendizaje
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-purple-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Ingenieria en sistemas (2016- actualidad) - Universidad de Antioquia
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Diplomado en programacion (2021- 2022) - Universidad Pontificia Javeriana 
          </div>
          <div
          className="flex justify-center text-center items-center p-10 bg-purple-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Proximamente 
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default InformacionAcademica;
