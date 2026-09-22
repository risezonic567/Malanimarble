// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { italianData } from "../data/italianmarble.js"; // Adjust path as needed
// import { useEffect } from "react";
// import { Helmet } from "react-helmet";

// export default function ItalianMarbleCollection() {
//     const category = italianData[0];

//     useEffect(() => {
//         window.scrollTo({
//             top: 0,
//             behavior: "instant",
//         });

//         const timer2 = setTimeout(() => {
//             window.scrollTo({
//                 top: 150,
//                 behavior: "smooth",
//             });
//         }, 1000);

//         return () => {
//             clearTimeout(timer2);
//         };
//     }, []);

//     return (
//         <section className="pb-20 bg-gradient-to-b from-white to-gray-100 min-h-screen">
//             <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>{category.metatitle}</title>
//                 <meta name="description" content={category.metades} />
//                 <link rel="canonical" href="https://www.malanimarbles.com/marble-collection/italian-marble" />
//                 <script type="application/ld+json">
//                     {`{
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "name": "Malani Marbles Pvt. Ltd.",
//             "image": "https://www.malanimarbles.com/img/logo-option-1.webp",
//             "@id": "https://www.malanimarbles.com/",
//             "url": "https://www.malanimarbles.com/marble-collection/italian-marble",
//             "telephone": "9810387297",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "Khasra No. 809-810 Chattarpur Mandir Road, Near Tivoli Garden",
//               "addressLocality": "New Delhi",
//               "postalCode": "110074",
//               "addressCountry": "IN"
//             },
//             "geo": {
//               "@type": "GeoCoordinates",
//               "latitude": 28.4999511,
//               "longitude": 77.18502749999999
//             },
//             "openingHoursSpecification": {
//               "@type": "OpeningHoursSpecification",
//               "dayOfWeek": [
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//                 "Sunday"
//               ],
//               "opens": "09:00",
//               "closes": "23:59"
//             },
//             "sameAs": [
//               "https://www.facebook.com/malanimarbles",
//               "https://www.instagram.com/malanimarbles/",
//               "https://www.youtube.com/@malanimarbles6638",
//               "https://www.linkedin.com/company/malani-marbles",
//               "https://in.pinterest.com/malanimarbles1/"
//             ] 
//           }`}
//                 </script>
//             </Helmet>

//             <div className="relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10"></div>
//                 <img
//                     className="w-full h-[400px] sm:h-[500px] object-cover"
//                     src={category.banner}
//                     alt={category.title}
//                 />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 mt-12">
//                 <h1 className="text-xl font-semibold text-center gradient-text mb-3 uppercase">
//                     {category.title}
//                 </h1>
//                 <h2 className="text-3xl font-semibold text-center text-gray-800 mb-3">
//                     Explore Premium Italian Marbles in Delhi
//                 </h2>
//                 <div
//                     className="
//     prose
//     prose-gray
//     max-w-5xl
//     mx-auto
//     mb-14
//     text-gray-600
//     leading-7
//     prose-headings:text-gray-800
//     prose-headings:font-semibold
//     prose-h2:text-2xl
//     prose-h3:text-xl
//     prose-p:mb-4
//     prose-a:text-blue-600
//     hover:prose-a:text-[#C5A059]
//   "
//                     dangerouslySetInnerHTML={{
//                         __html: category.paragraph,
//                     }}
//                 />

//                 {/* Products Grid */}
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {category.products.map((product, i) => (
//                         <motion.div
//                             key={i}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.98 }}
//                             className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white cursor-pointer flex flex-col justify-between"
//                         >
//                             <Link to={`/italian-marble/${product.slug}`}>
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={product.img}
//                                         alt={product.name}
//                                         className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                                         <h3 className="text-xl font-semibold text-white tracking-wide text-center px-4">
//                                             {product.name}
//                                         </h3>
//                                     </div>
//                                 </div>
//                                 <div className="p-5 text-center bg-white">
//                                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                                         {product.name}
//                                     </h3>
//                                     {/* <p className="text-sm font-medium text-black">
//                     ₹ {product.price}
//                   </p> */}
//                                 </div>
//                             </Link>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }