// import React from "react";
// import { NavLink } from "react-router-dom";
// // 1. Import React Icons
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaPinterest,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <div>
//       <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
//         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//             {/* Company Info and Social Links */}
//             <div className="md:col-span-2">
//               {/* <h3 className="text-3xl font-extrabold font-display mb-4 gradient-text">
//                 Malani Marble
//               </h3> */}
//               <NavLink to="/">
//                 {" "}
//                 <img
//                   src="https://i.postimg.cc/0ysPBwWw/New-Logo-White.png"
//                   alt="logo"
//                   className="sm:w-40 mb-4"
//                 />
//               </NavLink>
//               <p className="text-gray-300 mb-6 leading-relaxed max-w-sm">
//                 Crafting timeless elegance with premium natural stone. Your
//                 trusted partner for luxury marble solutions since 1990.
//               </p>
//               <div className="flex space-x-5 mt-4">
//                 <NavLink
//                   to="https://www.facebook.com/malanimarbles1/"
//                   aria-label="Facebook"
//                   className="text-gray-400 hover:gradient-text transition-colors duration-300"
//                 >
//                   {/* Replaced <i> with React Icon */}
//                   <FaFacebookF className="text-xl" />
//                 </NavLink>
//                 <NavLink
//                   to="https://www.instagram.com/malanimarbles/"
//                   aria-label="Instagram"
//                   className="text-gray-400 hover:gradient-text transition-colors duration-300"
//                 >
//                   {/* Replaced <i> with React Icon */}
//                   <FaInstagram className="text-xl" />
//                 </NavLink>

//                 <NavLink
//                   to="https://www.linkedin.com/company/malani-marbles/"
//                   aria-label="LinkedIn"
//                   className="text-gray-400 hover:gradient-text transition-colors duration-300"
//                 >
//                   {/* Replaced <i> with React Icon */}
//                   <FaLinkedinIn className="text-xl" />
//                 </NavLink>

//                 <NavLink
//                   to="https://www.youtube.com/@malanimarbles6638"
//                   aria-label="LinkedIn"
//                   className="text-gray-400 hover:gradient-text transition-colors duration-300"
//                 >
//                   {/* Replaced <i> with React Icon */}
//                   <FaYoutube className="text-xl" />
//                 </NavLink>
//                 <NavLink
//                   to="https://in.pinterest.com/malanimarbles1/"
//                   aria-label="LinkedIn"
//                   className="text-gray-400 hover:gradient-text transition-colors duration-300"
//                 >
//                   {/* Replaced <i> with React Icon */}
//                   <FaPinterest className="text-xl" />
//                 </NavLink>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
//               <ul className="space-y-3 text-gray-400">
//                 <li>
//                   <NavLink to="/" className="hover:gradient-text transition-colors duration-300">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/about" className="hover:gradient-text transition-colors duration-300">
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/blog" className="hover:gradient-text transition-colors duration-300">
//                     Blog
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/privacy-policy" className="hover:gradient-text transition-colors duration-300">
//                     Privacy Policy
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact" className="hover:gradient-text transition-colors duration-300">
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Collection Links */}
//             <div>
//               <h4 className="text-lg font-bold mb-5 text-white">Collection</h4>
//               <ul className="space-y-3 text-gray-400">
//                 <li>
//                   <NavLink to="/marble-collection" className="hover:gradient-text transition-colors duration-300">
//                     Marble Collection
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/tiles-collections" className="hover:gradient-text transition-colors duration-300">
//                     Tiles Collection
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>




//           </div>

//           {/* Separator */}
//           <div className="border-t border-gray-800 pt-8 mt-4">
//             <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
//               {/* Copyright Info */}
//               <p className="text-sm text-gray-400 mb-2 sm:mb-0">
//                 © {new Date().getFullYear()} Malani Marble. All rights reserved. |
//                 <span className="text-gray-300 ml-2">
//                   Crafted with <span className="text-red-500">❤️</span> for Premium Stone Solutions
//                 </span>
//               </p>

//               {/* 2. Developed by Risezonic */}
//               <p className="text-xs text-gray-500">
//                 Developed and Designed by <a href="https://risezonic.com" target="_blank" rel="noopener noreferrer" className="gradient-text hover:text-red-600 font-medium transition-colors duration-300">Risezonic</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





import React from "react";
import { NavLink } from "react-router-dom";
// React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">

           
            <div className="md:col-span-2">
              <NavLink to="/">
                <img
                  src="https://i.postimg.cc/0ysPBwWw/New-Logo-White.png"
                  alt="logo"
                  className="sm:w-40 mb-4"
                />
              </NavLink>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
                Crafting timeless elegance with premium natural stone. Your
                trusted partner for luxury marble solutions since 1990.
              </p>
              <div className="flex space-x-5 mt-4">
                <NavLink
                  to="https://www.facebook.com/malanimarbles1/"
                  target="_blank"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaFacebookF className="text-xl" />
                </NavLink>
                <NavLink
                  to="https://www.instagram.com/malanimarbles/"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram className="text-xl" />
                </NavLink>
                <NavLink
                  to="https://www.linkedin.com/company/malani-marbles/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-xl" />
                </NavLink>
                <NavLink
                  to="https://www.youtube.com/@malanimarbles6638"
                  target="_blank"
                  aria-label="YouTube"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaYoutube className="text-xl" />
                </NavLink>
                <NavLink
                  to="https://in.pinterest.com/malanimarbles1/"
                  target="_blank"
                  aria-label="Pinterest"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaPinterest className="text-xl" />
                </NavLink>
              </div>

              {/* <div className="flex space-x-5">
                <div className="text-gray-400 hover:text-white transition-colors duration-300 mt-4 w-auto h-40 flex items-center justify-center  bg-gray-800 hover:bg-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1753.865390655176!2d77.18731253865703!3d28.457530893940223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA%2011%2C%20Asola%20Farms%2C%20Near%20Shanidham%20Mandir%20Road%2C%20Chhatarpur%2C%20New%20Delhi%20-%20110074!5e0!3m2!1sen!2sin!4v1788511973681!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>

               
              </div> */}
            </div>


            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <NavLink to="/" className="hover:text-white transition-colors duration-300">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-white transition-colors duration-300">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="hover:text-white transition-colors duration-300">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:text-white transition-colors duration-300">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* 3. Collection Links */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Collection</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <NavLink to="/marble-collection" className="hover:text-white transition-colors duration-300">
                    Marble Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tiles-collections" className="hover:text-white transition-colors duration-300">
                    Tiles Collection
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* 4. Contact Us */}
            <div>
              <h4 className="text-lg font-bold mb-5 text-white">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">

                {/* Phone 1 */}
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-red-600 flex-shrink-0" />
                  <a href="tel:+919810387297" className="hover:text-white transition-colors">
                    +91 9810387297
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-red-600 flex-shrink-0" />
                  <a href="tel:+919811012011" className="hover:text-white transition-colors">
                    +91 9811012011
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-red-600 flex-shrink-0" />
                  <a href="mailto:info@malanimarbles.com" className="hover:text-white transition-colors break-all">
                    info@malanimarbles.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-red-600 flex-shrink-0" />
                  <a href="mailto:sales@malanimarbles.com" className="hover:text-white transition-colors break-all">
                    sales@malanimarbles.com
                  </a>
                </li>

                {/* Address 1 - Delhi */}
                <li className="flex items-start gap-3 mt-2">
                  <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
                  <span>
                    A 11, Asola Farms, Near Shanidham Mandir Road, Chhatarpur, New Delhi - 110074
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
                  <span>
                    Malani Marble Pvt. Ltd., Khasra No. 231/10, Village Kali Doongri, Kishangarh - 305801
                  </span>
                </li>

              </ul>
            </div>

          </div>

          {/* Separator & Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Malani Marble. All rights reserved. |
                <span className="text-gray-300 ml-2">
                  Crafted with <span className="text-red-500">❤️</span> for Premium Stone Solutions
                </span>
              </p>

              <p className="text-sm md:mr-28 text-gray-500">
                Developed and Designed by{" "}
                <a
                  href="https://risezonic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-500 font-medium transition-colors duration-300"
                >
                  Risezonic
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}