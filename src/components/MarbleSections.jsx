// src/components/MarblesSection.jsx
import { motion } from "framer-motion";

export default function MarblesSection() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="font-serif-heading text-3xl md:text-4xl mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Marble &amp; Natural Stone Solutions Across India
        </motion.h2>

        {/* Body copy */}
        <motion.p
          className="text-gray-800 leading-relaxed mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Malani Marbles offers reliable marble and natural stone solutions across
          India for residential and commercial projects. As a trusted Marble
          Supplier in India, we serve homeowners, building contractors,
          architects and interior designers.
        </motion.p>

        <motion.p
          className="text-gray-800 leading-relaxed mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          For clients seeking distinctive materials for contemporary and
          traditional spaces, our collection includes marble sourced from Italian
          factories and other international sources. Customers looking for an
          Italian Marble Supplier in India or Imported Marble Supplier in India
          can explore luxury stones suitable for flooring, wall cladding,
          countertops, staircases and other architectural applications.
        </motion.p>

        <motion.p
          className="text-gray-800 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          For clients in the Capital Region, Malani Marbles is also a reliable
          Marble Supplier in Delhi, offering a curated collection of Italian marble,
          imported marble, onyx and Brazilian quartzite for luxury homes, hotels,
          offices and commercial interiors.
        </motion.p>
      </div>
    </section>
  );
}