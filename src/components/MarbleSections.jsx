import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function MarblesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text left */}
        <div className="space-y-4">
          <motion.h2
            className="text-4xl md:text-3xl font-bold font-display text-red-600 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Marble &amp; Natural Stone Solutions Across India
          </motion.h2>

          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
          Malani Marbles offers premium marble and natural stone solutions across India for residential and commercial projects. As a trusted Marble Supplier in India, we serve homeowners, architects, interior designers, contractors and businesses with a carefully selected range of natural stone.
Our collection includes marble sourced from Italy and other international markets, along with a variety of natural stones for contemporary and traditional spaces. Explore our Italian marble and imported marble collection, with elegant materials suitable for flooring, wall cladding, countertops, staircases and other architectural applications.
          </motion.p>

          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
          For clients in Delhi and the surrounding region, Malani Marbles also provides a curated collection of <Link to="https://www.malanimarbles.com/marble-collection/italian-marble" className="text-blue-600 hover:underline"> Italian marble</Link>, imported marble, onyx and Brazilian quartzite for luxury homes, hotels, offices and commercial interiors.
          </motion.p>

          {/* <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            For clients in the Capital Region, Malani Marbles is also a reliable
            Marble Supplier in Delhi, offering a curated collection of Italian
            marble, <Link to="https://www.malanimarbles.com/marble-collection/imported-marble" className="text-blue-500 hover:underline">imported marble</Link> , onyx and Brazilian quartzite for luxury
            homes, hotels, offices and commercial interiors.
          </motion.p> */}
        </div>

        {/* Image right */}
        <div className="relative">
          <img
            src="/img/Marble image.jpg.jpeg"
            alt="Luxury marble slabs"
            className="w-full h-full border object-cover rounded-lg shadow-lg"
          />
          {/* Optional dark overlay if the image is bright */}
          {/* <div className="absolute inset-0 bg-black/30 rounded-lg" /> */}
        </div>
      </div>
    </section>
  );
}