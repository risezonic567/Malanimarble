// import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
// import { italianData } from "../data/italianmarble.js"; // Adjust path as needed
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
// import { Helmet } from "react-helmet";
// import { useEffect, useState } from "react";

// export default function ItalianMarbleDetail() {
//   const { slug } = useParams(); // Matches :slug from route definition

//   const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const navigate = useNavigate();

//   const category = italianData[0];

//   const product = category?.products.find((p) => p.slug === slug);

//   if (!category || !product) {
//     return <Navigate to="/italian-marble" replace />;
//   }

//   const parsedPrice = parseFloat(product.price?.toString().replace(/[^0-9.]/g, "")) || 0;
//   const totalPrice = parsedPrice * quantity;

//   const relatedProducts = category.products
//     .filter((p) => p.slug !== slug)
//     .slice(0, 4);

//   const description = product.description || "";
//   const DESCRIPTION_CHAR_LIMIT = 150;
//   const isLongDescription = description.length > DESCRIPTION_CHAR_LIMIT;

//   const displayDescription = isDescriptionExpanded
//     ? description
//     : description.slice(0, DESCRIPTION_CHAR_LIMIT) + (isLongDescription ? "..." : "");

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//     setIsDescriptionExpanded(false);
//     setQuantity(1);

//     const timer = setTimeout(() => {
//       window.scrollTo({
//         top: 150,
//         behavior: "smooth",
//       });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [slug]);

//   return (
//     <section className="min-h-screen bg-white font-sans text-slate-800">
//       <Helmet>
//         <title>{product.metatitle || `${product.name} | Malani Marbles Pvt. Ltd.`}</title>
//         <meta
//           name="description"
//           content={product.metades || product.description?.slice(0, 160)}
//         />
//         <link
//           rel="canonical"
//           href={`https://www.malanimarbles.com/italian-marble/${product.slug}`}
//         />
//       </Helmet>

//       {category.banner && (
//         <img
//           src={category.banner}
//           className="w-full object-cover h-[300px] sm:h-[400px]"
//           alt={category.name || category.title}
//         />
//       )}

//       <div className="max-w-7xl mx-auto px-6 py-10">
//         {/* Breadcrumbs */}
//         <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 flex-wrap">
//           <Link to="/" className="hover:text-black transition">
//             Home
//           </Link>
//           <span>/</span>
//           <Link to="/italian-marble" className="hover:text-black transition">
//             {category.name || category.title}
//           </Link>
//           <span>/</span>
//           <span className="text-black font-medium">{product.name}</span>
//         </nav>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
//           {/* Left Column: Image Gallery */}
//           <div className="w-full">
//             <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm border border-gray-200">
//               <Zoom>
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
//                 />
//               </Zoom>
//             </div>
//             <p className="text-xs text-gray-400 mt-2 text-center">Click image to zoom</p>
//           </div>

//           {/* Right Column: Details & Pricing */}
//           <div className="flex flex-col h-full">
//             <span className="text-xl md:text-2xl font-serif font-bold text-green-600 mb-4">
//               ₹ {product.price}
//             </span>

//             <div className="mb-6">
//               {/* Quantity Selector */}
//               <div className="flex items-center gap-3 mt-4">
//                 <span className="text-sm font-medium text-gray-600">Quantity:</span>

//                 <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                   <button
//                     type="button"
//                     onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
//                     className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-100"
//                   >
//                     −
//                   </button>

//                   <span className="w-12 h-10 flex items-center justify-center border-x border-gray-300 font-semibold">
//                     {quantity}
//                   </span>

//                   <button
//                     type="button"
//                     onClick={() => setQuantity((prev) => prev + 1)}
//                     className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Total Price & Checkout */}
//               <div className="mt-4 text-lg font-bold text-gray-900 flex items-center flex-wrap gap-4">
//                 <span>Total: ₹{totalPrice.toLocaleString("en-IN")}</span>

//                 <button
//                   onClick={() =>
//                     navigate("/checkout", {
//                       state: { product, totalPrice, quantity, category },
//                     })
//                   }
//                   className="flex-1 min-w-[200px] bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg text-center"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
//               {product.name}
//             </h1>

//             <div className="flex items-center gap-4 mb-6">
//               <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
//                 {category.name || category.title} Series
//               </span>
//             </div>

//             {/* Description */}
//             {description ? (
//               <div className="mb-8">
//                 <p className="text-gray-600 leading-relaxed text-lg transition-all duration-300">
//                   {displayDescription}
//                 </p>

//                 {isLongDescription && (
//                   <button
//                     onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
//                     className="mt-2 text-sm font-bold text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
//                   >
//                     {isDescriptionExpanded ? "Read Less" : "Read More"}
//                   </button>
//                 )}
//               </div>
//             ) : (
//               <div className="mb-8">
//                 <p className="text-gray-400 italic">No description available</p>
//               </div>
//             )}

//             {/* Specifications Card */}
//             <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
//               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
//                 Specifications
//               </h3>
//               <div className="grid grid-cols-2 gap-y-4 text-sm">
//                 <div>
//                   <span className="block text-gray-500">Primary Color</span>
//                   <span className="font-medium">Soft Beige</span>
//                 </div>
//                 <div>
//                   <span className="block text-gray-500">Material Type</span>
//                   <span className="font-medium">Italian Marble</span>
//                 </div>
//                 <div>
//                   <span className="block text-gray-500">Finish</span>
//                   <span className="font-medium">Polished / Honed</span>
//                 </div>
//                 <div>
//                   <span className="block text-gray-500">Application</span>
//                   <span className="font-medium">Flooring, Countertops, Wall Cladding</span>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-auto flex gap-4 flex-col sm:flex-row">
//               <Link to="/contact" className="flex-1">
//                 <button className="w-full bg-black text-white py-4 px-8 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg">
//                   Get a Quote
//                 </button>
//               </Link>
//               <button className="flex-1 border border-black text-black py-4 px-8 rounded-lg font-medium hover:bg-gray-50 transition">
//                 Request Sample
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Related Products */}
//         {relatedProducts && relatedProducts.length > 0 && (
//           <div className="mt-24 pt-10 border-t border-gray-200">
//             <div className="flex justify-between items-end mb-8">
//               <div>
//                 <h2 className="text-2xl font-serif font-bold text-gray-900">
//                   More from {category.name || category.title}
//                 </h2>
//                 <p className="text-gray-500 mt-1">Explore other variations in this collection.</p>
//               </div>
//               <Link
//                 to="/italian-marble"
//                 className="hidden md:inline-block text-black font-medium border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition"
//               >
//                 View All
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {relatedProducts.map((relProduct) => (
//                 <Link
//                   key={relProduct.slug}
//                   to={`/italian-marble/${relProduct.slug}`}
//                   className="group block"
//                 >
//                   <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
//                     <img
//                       src={relProduct.img}
//                       alt={relProduct.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
//                       Quick View
//                     </div>
//                   </div>
//                   <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition">
//                     {relProduct.name}
//                   </h3>
//                   {/* <p className="text-sm font-medium text-black mt-1">
//                     ₹ {relProduct.price}
//                   </p> */}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }