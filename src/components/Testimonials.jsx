import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Testimonials() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-12">
            What Our Clients Say
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
          >
            {[
              {
                name: "Nitin Jain",
                role: "homeowner",
                text: "The marble was of very good quality, and the team assisted in selecting the appropriate Italian marble for our living room. The veining looked even more beautiful after installation.",
                // img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
              },

              {
                name: "Parineeti Shegal",
                role: "Architect",
                text: "The Italian marble range also has beautiful selections available, particularly where unique designs and natural veining are preferred. The showroom staff was accommodating without pressuring the decision-making process.",
                // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JspgTQtYvHcB08PL2AP_hGEmoAoUVAJhTg&s",
              },
              
              {
                name: "Neha Kapoor",
                role: "Builder & Contractor",
                text: "Material choice plays a very vital role for our luxury residences. Malani Marbles provides an extensive collection of marble from Italy and other countries which suits best for luxurious interiors.",
                // img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              },
            ].map((t) => (
              <SwiperSlide key={t.name}>
                <div className="glass-morphism p-8 rounded-xl">
                  <p className="italic mb-6">“{t.text}”</p>
                  <div className="flex items-center justify-center">
                    {/* <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4"
                    /> */}
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-gray-400 text-sm">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
