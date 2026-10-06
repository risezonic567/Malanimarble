import React, { useEffect } from "react";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/About/WhyChooseUs";
import { ArrowBigDown } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Whyus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Why Choose Malani Marbles</title>

        <meta
          name="description"
          content="Discover why Malani Marbles is the first choice for marble & granite in India — superior quality, ethical sourcing, expert craftsmanship, and unmatched service."
        />

        <link
          rel="canonical"
          href="https://www.malanimarbles.com/why-us"
        />
      </Helmet>

      <main className="w-full">
        {/* =====================================================
            HERO SECTION
        ====================================================== */}

        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Fixed Background Image */}
          <div className="fixed inset-0 -z-10">
            <img
              src="https://raw.githubusercontent.com/Ashish-Kaintura/malaniReact20205/Gallery/whyus/Why%20us.webp"
              alt="Why choose Malani Marbles for premium marble"
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10" />
          </div>

          {/* Hero Content */}
          <div
            className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="gradient-text">
                Malani Marbles Pvt. Ltd.
              </span>
            </h1>

            <p className="md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Best Marble in India for Elegant Flooring & Interiors
            </p>
          </div>

          {/* Bottom Arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white floating z-10">
            <ArrowBigDown size={40} />
          </div>
        </section>

        {/* =====================================================
            WHY US INTRO SECTION
        ====================================================== */}

        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="py-12">
              {/* Section Heading */}
              <div className="py-5">
                <div className="flex flex-col relative justify-center items-center">
                  {/* Top Left Decoration */}
                  <span
                    className="
                      absolute
                      sm:h-[2.544vw]
                      h-[8.544vw]
                      sm:w-[3.646vw]
                      w-[11.646vw]
                      mr-40
                      top-[-0.685vw]
                      border-t-4
                      border-l-4
                      border-[#e02529]
                    "
                  />

                  <h2 className="max-w-max px-2 text-4xl">
                    Why Us
                  </h2>

                  {/* Bottom Right Decoration */}
                  <span
                    className="
                      absolute
                      sm:bottom-[-1.002vw]
                      bottom-[-2.002vw]
                      sm:h-[2.344vw]
                      h-[8.344vw]
                      sm:w-[3.646vw]
                      w-[11.646vw]
                      ml-40
                      border-r-4
                      border-b-4
                      border-[#e02529]
                    "
                  />
                </div>
              </div>

              {/* Description */}
              <div className="py-8 text-gray-700 leading-relaxed">
                <p className="text-center">
                  With a remarkable 28+ year presence in the industry, Malani
                  Marbles has consistently been catering to customer
                  requirements and exceeds expectations. Our commitment to
                  excellent service and superior products has allowed us to
                  expand across India. We are always trying to improve the
                  quality of our products and enhance these with remarkable
                  features, which is not only easy on the pocket but also
                  increase their demand in the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TESTIMONIALS
        ====================================================== */}

        <section className="relative bg-white">
          <Testimonials />
        </section>

        {/* =====================================================
            WHY CHOOSE US
        ====================================================== */}

        <section className="relative bg-white">
          <WhyChooseUs />
        </section>
      </main>
    </>
  );
}
