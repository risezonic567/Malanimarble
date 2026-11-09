// /* eslint-disable no-unused-vars */
// import { useParams, Link } from "react-router-dom";
// import marbleData from "../data/marblecollection.json";
// import { useEffect, useState } from "react";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet";

// export default function MarbleCategory() {
//   const { slug } = useParams();
//   const category = marbleData.find((c) => c.slug === slug);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     window.scroll(0, 0)
//   })

//   if (!category) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <section className="pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{category.metatitle}</title>
//         <meta name="description" content={category.metades}></meta>
//         {/* Corrected Line: Use template literal inside curly braces */}
//         <link rel="canonical" href={`https://www.malanimarbles.com/marble-collection/${category.slug}`} />
//       </Helmet>
//       <div className="relative">
//         <img className="w-full" src={category.banner} alt={category.name + "Banner"} />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-10">

//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-6 pt-12">
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8 uppercase gradient-text">
//           {category.title}
//         </h1>
//         <p className="text-sm mb-12 max-w-6xl mx-auto text-center line-clamp-2" >Malani Marbles Pvt. Ltd., one of India's best and largest marble collections of Italian marble, imported marble, Indian marble, onyx marble, travertine marble and other natural stone slabs for your residential, commercial and architectural projects. One of the foremost marble supplier in India, builders, interior designers, leading architects and marble dealers rely on Malani Marbles Pvt. Ltd. marble collections to bring all the elements of high quality marble, luxury finishes and precision craftsmanship. All the marble slabs in our collection are hand-picked from the finest quarries in the world and processed with the highest quality Italian processing equipment to achieve unparalleled durability, high gloss polish and timeless beauty. Every marble slab in our collection is meant to provide the very best of elegance, strength and grace in the case of flooring marble, wall-cladding marble, kitchen countertop marble and other decorative marble applications. And of course, marble is always going to elevate the sophistication of every space!
//         </p>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {category.products.map((p, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => setSelected(p)}
//               className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={p.img}
//                 alt={p.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-5 text-center">
//                 <h3 className="text-lg font-semibold text-gray-700">
//                   {p.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             to="/marble-collection"
//             className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
//           >
//             ← Back to Collections
//           </Link>
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full mx-6"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Zoom>
//                 <img
//                   src={selected.img}
//                   alt={selected.name}
//                   className="w-full object-contain max-h-[80vh]"
//                 />
//               </Zoom>
//               <div className="p-6 text-center">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-3">
//                   {selected.name}
//                 </h2>
//                 <button
//                   onClick={() => setSelected(null)}
//                   className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



// import { useParams, Link, Navigate } from "react-router-dom";
// import marbleData from "../data/marblecollection.json";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";

// function excerpt(text = "", wordLimit = 50) {
//   const words = String(text).replace(/\s+/g, " ").trim().split(" ");
//   if (words.length <= wordLimit) return words.join(" ");
//   return `${words.slice(0, wordLimit).join(" ")}…`;
// }

// function ItalianMarbleLanding({ category }) {
//   const [openFaq, setOpenFaq] = useState(null);
//   const showroom = category.showroom || {};
//   const faqs = category.faqs || [];
//   const whatsapp = showroom.whatsapp || "919810387297";
//   const phone = showroom.phone || "+91 9810387297";

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((item) => ({
//       "@type": "Question",
//       name: item.q,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: item.a,
//       },
//     })),
//   };

//   return (
//     <section className="pb-20 bg-[#f7f6f3] min-h-screen text-slate-800">
//       <Helmet>
//         <title>{category.metatitle}</title>
//         <meta name="description" content={category.metades} />
//         <link
//           rel="canonical"
//           href={`https://www.malanimarbles.com/marble-collection/${category.slug}`}
//         />
//         {faqs.length > 0 && (
//           <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
//         )}
//       </Helmet>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
//         <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
//           <Link to="/" className="hover:text-slate-800">
//             Home
//           </Link>
//           <span className="mx-2">›</span>
//           <Link to="/marble-collection" className="hover:text-slate-800">
//             Marble collection
//           </Link>
//           <span className="mx-2">›</span>
//           <span className="text-slate-800">Italian marble</span>
//         </nav>

//         <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-8">
//           <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
//             <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
//               {category.title}
//             </h1>
//             <p className="text-slate-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: category.intro}}/>
//             <div className="flex flex-wrap gap-3">
//               <Link
//                 to="/contact"
//                 className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-black"
//               >
//                 Get bulk quote
//               </Link>
//               <a
//                 href={`tel:${phone.replace(/\s/g, "")}`}
//                 className="px-5 py-2.5 rounded-full border border-slate-300 text-sm font-medium hover:border-slate-500"
//               >
//                 Call now
//               </a>
//             </div>
//           </div>
//           <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white min-h-[240px]">
//             <img
//               src={category.banner || category.img}
//               alt="Italian marbles showroom slab at Malani Marbles"
//               className="w-full h-full object-cover min-h-[240px] max-h-[360px]"
//             />
//           </div>
//         </div>

//         <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//           <h2 className="text-2xl font-semibold mb-6">Types of Italian marble we offer</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {category.products.map((p) => (
//               <article
//                 key={p.slug}
//                 className="rounded-2xl border border-slate-200 overflow-hidden bg-[#fbfaf8]"
//               >
//                 <Link to={`/marble-collection/${category.slug}/${p.slug}`}>
//                   <img
//                     src={p.img}
//                     alt={p.name}
//                     className="w-full h-40 object-cover"
//                   />
//                 </Link>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-slate-900 mb-2">{p.name}</h3>
//                   <p className="text-sm text-slate-600 mb-3">
//                     {excerpt(p.description)}
//                   </p>
//                   <Link
//                     to="/contact"
//                     className="text-sm font-medium text-slate-900 underline underline-offset-2"
//                   >
//                     Get a quote
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {category.uses?.length > 0 && (
//           <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Where Italian marble is used</h2>
//             <div className="flex flex-wrap gap-2">
//               {category.uses.map((use) => (
//                 <span
//                   key={use}
//                   className="px-4 py-2 rounded-full border border-slate-200 text-sm bg-[#f7f6f3]"
//                 >
//                   {use}
//                 </span>
//               ))}
//             </div>
//           </section>
//         )}

//         {category.finishes?.length > 0 && (
//           <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Finishes and sizes</h2>
//             <div className="grid sm:grid-cols-3 gap-4">
//               {category.finishes.map((finish) => (
//                 <div
//                   key={finish.title}
//                   className="rounded-2xl border border-slate-200 p-4"
//                 >
//                   <h3 className="font-semibold mb-1">{finish.title}</h3>
//                   <p className="text-sm text-slate-600">{finish.line}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {category.compare && (
//           <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">
//               Italian marble
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="rounded-2xl border border-slate-200 p-4">
//                 <h3 className="font-semibold mb-2">Italian</h3>
//                 <p className="text-sm text-slate-600">{category.compare.italian}</p>
//               </div>
//               <div className="rounded-2xl border border-slate-200 p-4">
//                 <h3 className="font-semibold mb-2">Indian</h3>
//                 <p className="text-sm text-slate-600 mb-3">{category.compare.indian}</p>
//                 <Link
//                   to="/marble-collection"
//                   className="text-sm font-medium underline underline-offset-2"
//                 >
//                    Marble collection
//                 </Link>
//               </div>
//             </div>
//           </section>
//         )}

//         {category.care?.length > 0 && (
//           <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Care and maintenance tips</h2>
//             <ul className="list-disc pl-5 space-y-2 text-slate-600">
//               {category.care.map((tip) => (
//                 <li key={tip}>{tip}</li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {category.trade && (
//           <section className="rounded-3xl border border-sky-100 bg-sky-50 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-3">
//               Bulk supply for dealers and wholesalers
//             </h2>
//             <p className="text-slate-700 mb-5">{category.trade}</p>
//             <div className="flex flex-wrap gap-3">
//               <Link
//                 to="/contact"
//                 className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-black"
//               >
//                 Get bulk quote
//               </Link>
//               <a
//                 href={`https://wa.me/${whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </section>
//         )}

//         {showroom.name && (
//           <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Visit our showroom in Delhi NCR</h2>
//             <div className="grid lg:grid-cols-2 gap-6">
//               <div className="text-slate-600 space-y-2">
//                 <p className="font-semibold text-slate-900">{showroom.name}</p>
//                 <p>{showroom.address}</p>
//                 <p>
//                   Phone:{" "}
//                   <a className="underline" href={`tel:${phone.replace(/\s/g, "")}`}>
//                     {phone}
//                   </a>
//                 </p>
//                 <p>
//                   WhatsApp:{" "}
//                   <a
//                     className="underline"
//                     href={`https://wa.me/${whatsapp}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     +{whatsapp}
//                   </a>
//                 </p>
//                 <p>{showroom.timings}</p>
//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Malani+Marbles+chhatarpur"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-2 text-sm font-medium underline"
//                 >
//                   Google Business Profile
//                 </a>
//               </div>
//               {showroom.image && (
//                 <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 lg:h-72">
//                   <img
//                     src={showroom.image}
//                     alt={`${showroom.name} showroom in Delhi`}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//               )}
//             </div>
//           </section>
//         )}

//         {faqs.length > 0 && (
//           <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
//             <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
//             <div className="divide-y divide-slate-200">
//               {faqs.map((item, index) => (
//                 <div key={item.q}>
//                   <button
//                     type="button"
//                     className="w-full text-left py-4 flex justify-between gap-4"
//                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   >
//                     <h3 className="font-medium text-slate-900">{item.q}</h3>
//                     <span className="text-slate-400">{openFaq === index ? "−" : "+"}</span>
//                   </button>
//                   {openFaq === index && (
//                     <p className="pb-4 text-sm text-slate-600">{item.a}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 px-1">
//           <Link className="underline underline-offset-2" to="/marble-collection/imported-marble">
//             Imported marble
//           </Link>
//           <Link className="underline underline-offset-2" to="/marble-collection">
//             Indian marble
//           </Link>
//           <Link className="underline underline-offset-2" to="/marble-collection/indian-granite">
//             Granite
//           </Link>
//           <Link className="underline underline-offset-2" to="/contact">
//             Contact
//           </Link>
//           <Link className="underline underline-offset-2" to="/">
//             Home
//           </Link>
//         </nav>
//       </div>
//     </section>
//   );
// }

// export default function MarbleCategory() {
//   const { slug } = useParams();
//   const category = marbleData.find(c => c.slug === slug);

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "instant",
//     });


//     const timer2 = setTimeout(() => {
//       window.scrollTo({
//         top: 150,
//         behavior: "smooth",
//       });
//     }, 1000);

//     return () => {

//       clearTimeout(timer2);
//     };
//   }, []);

//   if (!category) return <Navigate to="/" replace />;

//   if (slug === "italian-marble") {
//     return <ItalianMarbleLanding category={category} />;
//   }

//   return (
//     <section className="pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       <Helmet>
//         <title>{category.metatitle}</title>
//         <meta name="description" content={category.metades} />
//         <link
//           rel="canonical"
//           href={`https://www.malanimarbles.com/marble-collection/${category.slug}`}
//         />
//       </Helmet>

//       <img src={category.banner} className="w-full" alt={category.name} />

//       <div className="max-w-7xl mx-auto px-6 pt-12">
//         <h1 className="text-3xl font-semibold text-center mb-10 uppercase">
//           {category.title}
//         </h1>
//         <p
//           className="text-md mb-12 text-justify max-w-6xl mx-auto text-center"
//           dangerouslySetInnerHTML={{ __html: category.paragraph }}
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {category.products.map((p) => (
//             <Link
//               key={p.slug}
//               to={`/marble-collection/${category.slug}/${p.slug}`}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-2xl shadow-xl overflow-hidden"
//               >
//                 <img
//                   src={p.img}
//                   alt={p.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-5 text-center">
//                   <h3 className="text-lg font-semibold">{p.name}</h3>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             to="/marble-collection"
//             className="px-6 py-3 bg-gray-800 text-white rounded-xl"
//           >
//             ← Back to Collections
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useParams, Link, Navigate } from "react-router-dom";
import marbleData from "../data/marblecollection.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Layers,
  Bath,
  DoorOpen,
  UtensilsCrossed,
  Building2,
  Eye,
  Award,
  MessageCircle,
} from "lucide-react";

const USE_ICONS = {
  Floors: Layers,
  "Walls and bathrooms": Bath,
  "Staircases and entrances": DoorOpen,
  Kitchens: UtensilsCrossed,
  "Commercial spaces": Building2,
};

const WHY_ICONS = {
  "Choose by seeing": Eye,
  Experience: Award,
  "Straight advice": MessageCircle,
};

function ItalianMarbleLanding({ category }) {
  const [openFaq, setOpenFaq] = useState(null);
  const showroom = category.showroom || {};
  const faqs = category.faqs || [];
  const uses = category.uses || [];
  const whyUs = category.whyUs || [];
  const howToChoose = category.howToChoose || [];
  const processSteps = category.process || [];
  const buyers = category.buyers || null;
  const whatsapp = showroom.whatsapp || "919810387297";
  const phone = showroom.phone || "+91 9810387297";
  const phoneAlt = showroom.phoneAlt || "+91 9811012011";
  const email = showroom.email || "sales@malanimarbles.com";
  const accent = "#9a6b3f";

  const introParts = String(category.intro || "")
    .replace(/\\n/g, "\n")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const btnPrimary =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white transition hover:opacity-90";
  const btnOutline =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold border transition hover:bg-white/10";

  return (
    <section className="pb-0 bg-[#f7f4ef] min-h-screen text-slate-800">
      <Helmet>
        <title>{category.metatitle}</title>
        <meta name="description" content={category.metades} />
        <link
          rel="canonical"
          href={`https://www.malanimarbles.com/marble-collection/${category.slug}`}
        />
        {faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-slate-800">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/marble-collection" className="hover:text-slate-800">
            Marble Collection
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Italian Marbles</span>
        </nav>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-14">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-slate-900 leading-tight mb-5">
              {category.title || "Italian Marbles at Malani Marbles"}
            </h1>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
              {introParts.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link to="/contact" className={btnPrimary} style={{ backgroundColor: accent }}>
                Get a Quote
              </Link>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={btnOutline}
                style={{ borderColor: accent, color: accent }}
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Showroom open Mon–Sun, 10:00 AM – 8:00 PM · In the stone trade since 1997
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white min-h-[260px] shadow-sm">
            <img
              src={category.banner || category.img || showroom.image}
              alt="Italian marbles at Malani Marbles Chhatarpur showroom"
              className="w-full h-full object-cover min-h-[260px] max-h-[420px]"
            />
          </div>
        </div>

        {/* Popular varieties */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
            Popular Varieties of Italian Marbles We Offer
          </h2>
          {category.varietiesNote && (
            <p className="text-sm text-slate-600 mb-6 max-w-3xl">{category.varietiesNote}</p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {(category.products || []).map((p) => (
              <Link
                key={p.slug}
                to={`/marble-collection/${category.slug}/${p.slug}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-600 flex-1">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {category.varietiesCta && (
            <p className="text-sm text-slate-600">{category.varietiesCta}</p>
          )}
        </section>

        {/* Where it works */}
        {uses.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Where Italian Marbles Work Best
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
              {uses.map((use) => {
                const title = typeof use === "string" ? use : use.title;
                const body = typeof use === "string" ? "" : use.body;
                const Icon = USE_ICONS[title] || Layers;
                return (
                  <div
                    key={title}
                    className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm h-full flex flex-col"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${accent}18`, color: accent }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                    {body && (
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">{body}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Home vs Project */}
        {buyers && (
          <section className="mb-14 rounded-2xl overflow-hidden bg-slate-900 text-white">
            <div className="px-6 sm:px-8 pt-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{buyers.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15 items-stretch">
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className="font-semibold text-lg mb-3">{buyers.home?.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">{buyers.home?.body}</p>
                <Link
                  to="/infrastructure"
                  className="text-sm font-semibold underline underline-offset-2"
                  style={{ color: "#d4a574" }}
                >
                  Visit our showroom
                </Link>
              </div>
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className="font-semibold text-lg mb-3">{buyers.project?.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                  {(buyers.project?.body || "")
                    .split("Italian marble wholesalers")
                    .map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <Link
                            to="/italian-marble-suppliers-in-india"
                            className="underline underline-offset-2 font-medium"
                            style={{ color: "#d4a574" }}
                          >
                            Italian marble wholesalers
                          </Link>
                        )}
                      </span>
                    ))}
                </p>
                <Link
                  to="/marble-supplier-in-delhi"
                  className="text-sm font-semibold underline underline-offset-2"
                  style={{ color: "#d4a574" }}
                >
                  Read about our marble suppliers
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Why buy */}
        {whyUs.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              Why Buy From Malani Marbles
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 items-stretch">
              {whyUs.map((item) => {
                const Icon = WHY_ICONS[item.title] || Award;
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm h-full flex flex-col"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${accent}18`, color: accent }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Choose + Care */}
        <section className="mb-14 grid lg:grid-cols-2 gap-5 items-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              How to Choose the Right Slab
            </h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc pl-5">
              {howToChoose.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Caring for Your Marble
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {category.careText ||
                "Seal after installation, wipe spills quickly, and use a pH-neutral stone cleaner."}
            </p>
          </div>
        </section>

        {/* Process */}
        {processSteps.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
              How Buying From Us Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
                >
                  <div
                    className="w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center mb-3"
                    style={{ backgroundColor: accent }}
                  >
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((item, index) => {
                const open = openFaq === index;
                return (
                  <div
                    key={item.q}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                  >
                    <button
                      type="button"
                      className="w-full text-left px-5 py-4 flex justify-between gap-4 items-start"
                      onClick={() => setOpenFaq(open ? null : index)}
                      aria-expanded={open}
                    >
                      <h3 className="font-medium text-slate-900 pr-2">{item.q}</h3>
                      <span className="text-slate-400 shrink-0 mt-0.5">{open ? "▴" : "▾"}</span>
                    </button>
                    {open && (
                      <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Visit showroom — restored card layout */}
        {showroom.name && (
          <section className="mb-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Visit our showroom in Delhi NCR
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="text-slate-600 space-y-2">
                <p className="font-semibold text-slate-900">
                  <a
                    href="https://www.malanimarbles.com/"
                    className="underline underline-offset-2 hover:text-slate-900"
                  >
                    Malani Marbles
                  </a>
                  {" "}
                  (Malani Marble Pvt. Ltd.)
                </p>
                <p>{showroom.address}</p>
                <p>
                  Phone:{" "}
                  <a className="underline" href={`tel:${phone.replace(/\s/g, "")}`}>
                    {phone}
                  </a>
                  {phoneAlt ? (
                    <>
                      ,{" "}
                      <a className="underline" href={`tel:${phoneAlt.replace(/\s/g, "")}`}>
                        {phoneAlt}
                      </a>
                    </>
                  ) : null}
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    className="underline"
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 98103 87297
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a className="underline" href={`mailto:${email}`}>
                    {email}
                  </a>
                </p>
                <p>{showroom.timings}</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Malani+Marbles+Chhatarpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium underline"
                >
                  Google Business Profile
                </a>
              </div>
              {showroom.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 lg:h-72">
                  <img
                    src={showroom.image}
                    alt={`${showroom.name} showroom in Delhi`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default function MarbleCategory() {
  const { slug } = useParams();
  const category = marbleData.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });


    const timer2 = setTimeout(() => {
      window.scrollTo({
        top: 150,
        behavior: "smooth",
      });
    }, 1000);

    return () => {

      clearTimeout(timer2);
    };
  }, []);

  if (!category) return <Navigate to="/" replace />;

  if (slug === "italian-marble") {
    return <ItalianMarbleLanding category={category} />;
  }

  return (
    <section className="pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Helmet>
        <title>{category.metatitle}</title>
        <meta name="description" content={category.metades} />
        <link
          rel="canonical"
          href={`https://www.malanimarbles.com/marble-collection/${category.slug}`}
        />
      </Helmet>

      <img src={category.banner} className="w-full" alt={category.name} />

      <div className="max-w-7xl mx-auto px-6 pt-12">
        <h1 className="text-3xl font-semibold text-center mb-10 uppercase">
          {category.title}
        </h1>
        <p
          className="text-md mb-12 text-justify max-w-6xl mx-auto text-center"
          dangerouslySetInnerHTML={{ __html: category.paragraph }}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {category.products.map((p) => (
            <Link
              key={p.slug}
              to={`/marble-collection/${category.slug}/${p.slug}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/marble-collection"
            className="px-6 py-3 bg-gray-800 text-white rounded-xl"
          >
            ← Back to Collections
          </Link>
        </div>
      </div>
    </section>
  );
}

