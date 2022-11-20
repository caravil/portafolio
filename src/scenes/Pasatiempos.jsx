import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Pasatiempos = () => {
  return (
    <section id="pasatiempos" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-blue">
          PASATIEMPOS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Nadie que haya dado lo mejor de sí mismo lo ha lamentado nunca (George Halas)
        </p>
      </motion.div>

      {/* Pasatiempos */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Video juegos: me gustan todos los tipos de juegos, 
            en ocasiones pierdo la nocion del tiempo por jugarlos.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple-500 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Gastronomia: es uno de los placere de la vida es comer, me gusta probar cosas nuevas aprender
            y claro esta llevar felicidad a las personas que degustan mis platillos.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Musica: Con la musica en muchas ocasiones nos sentimos felices, no es la exepcion me gusta mucho escucharla
            me gusta la musica de todos los generos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pasatiempos;
