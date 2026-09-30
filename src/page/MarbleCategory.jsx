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
//                   href="https://www.google.com/maps/search/?api=1&query=Malani+Marbles+Chhatarpur"
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

function excerpt(text = "", wordLimit = 50) {
  const words = String(text).replace(/\s+/g, " ").trim().split(" ");
  if (words.length <= wordLimit) return words.join(" ");
  return `${words.slice(0, wordLimit).join(" ")}…`;
}

function ItalianMarbleLanding({ category }) {
  const [openFaq, setOpenFaq] = useState(null);
  const showroom = category.showroom || {};
  const faqs = category.faqs || [];
  const whatsapp = showroom.whatsapp || "919810387297";
  const phone = showroom.phone || "+91 9810387297";

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

  return (
    <section className="pb-20 bg-[#f7f6f3] min-h-screen text-slate-800">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-slate-800">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link to="/marble-collection" className="hover:text-slate-800">
            Marble collection
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-800">Italian marble</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              {category.title || category.name}
            </h1>
            <p className="text-slate-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: category.intro}}/>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-black"
              >
                Get bulk quote
              </Link>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="px-5 py-2.5 rounded-full border border-slate-300 text-sm font-medium hover:border-slate-500"
              >
                Call now
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white min-h-[240px]">
            <img
              src={category.banner || category.img}
              alt="Italian marbles showroom slab at Malani Marbles"
              className="w-full h-full object-cover min-h-[240px] max-h-[360px]"
            />
          </div>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-6">Types of Italian marble we offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {category.products.map((p) => (
              <article
                key={p.slug}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-[#fbfaf8]"
              >
                <Link to={`/marble-collection/${category.slug}/${p.slug}`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-40 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {excerpt(p.description)}
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-slate-900 underline underline-offset-2"
                  >
                    Get a quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {category.text && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <div
              className="text-slate-600 leading-relaxed
                [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2:first-child]:mt-0
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2
                [&_p]:mb-3 [&_strong]:text-slate-900"
              dangerouslySetInnerHTML={{ __html: category.text }}
            />
          </section>
        )}

        {category.uses?.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Where Italian marble is used</h2>
            <div className="flex flex-wrap gap-2">
              {category.uses.map((use) => (
                <span
                  key={use}
                  className="px-4 py-2 rounded-full border border-slate-200 text-sm bg-[#f7f6f3]"
                >
                  {use}
                </span>
              ))}
            </div>
          </section>
        )}

        {category.finishes?.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Finishes and sizes</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {category.finishes.map((finish) => (
                <div
                  key={finish.title}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <h3 className="font-semibold mb-1">{finish.title}</h3>
                  <p className="text-sm text-slate-600">{finish.line}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {category.compare && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Italian marble
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="font-semibold mb-2">Italian</h3>
                <p className="text-sm text-slate-600">{category.compare.italian}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <h3 className="font-semibold mb-2">Indian</h3>
                <p className="text-sm text-slate-600 mb-3">{category.compare.indian}</p>
                <Link
                  to="/marble-collection"
                  className="text-sm font-medium underline underline-offset-2"
                >
                   Marble collection
                </Link>
              </div>
            </div>
          </section>
        )}

        {category.care?.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Care and maintenance tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              {category.care.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {category.trade && (
          <section className="rounded-3xl border border-sky-100 bg-sky-50 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              Bulk supply for dealers and wholesalers
            </h2>
            <p className="text-slate-700 mb-5">{category.trade}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-black"
              >
                Get bulk quote
              </Link>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium"
              >
                WhatsApp
              </a>
            </div>
          </section>
        )}

        {showroom.name && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Visit our showroom in Delhi NCR</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="text-slate-600 space-y-2">
                <p className="font-semibold text-slate-900">{showroom.name}</p>
                <p>{showroom.address}</p>
                <p>
                  Phone:{" "}
                  <a className="underline" href={`tel:${phone.replace(/\s/g, "")}`}>
                    {phone}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    className="underline"
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +{whatsapp}
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

        {faqs.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
            <div className="divide-y divide-slate-200">
              {faqs.map((item, index) => (
                <div key={item.q}>
                  <button
                    type="button"
                    className="w-full text-left py-4 flex justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="font-medium text-slate-900">{item.q}</h3>
                    <span className="text-slate-400">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <p className="pb-4 text-sm text-slate-600">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 px-1">
          <Link className="underline underline-offset-2" to="/marble-collection/imported-marble">
            Imported marble
          </Link>
          <Link className="underline underline-offset-2" to="/marble-collection">
            Indian marble
          </Link>
          <Link className="underline underline-offset-2" to="/marble-collection/indian-granite">
            Granite
          </Link>
          <Link className="underline underline-offset-2" to="/contact">
            Contact
          </Link>
          <Link className="underline underline-offset-2" to="/">
            Home
          </Link>
        </nav>
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

