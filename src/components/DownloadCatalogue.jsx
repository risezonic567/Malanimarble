import React, { useEffect } from "react";
import { FileText } from "lucide-react";

const DownloadCatalogue = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const catalogues = [
    {
      title: "Malani Ecatalogue",
      file: "/pdf/Malani Ecatalog.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f1f3f6] text-gray-800">

      <section className="relative h-[45vh] md:h-[70vh] w-full overflow-hidden">

        <img
          src="/img/Marble Ectalog.jpg.jpeg"
          alt="Marble Showroom"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div className="text-white">

            <p className="text-sm md:text-lg font-semibold text-red-200 tracking-[0.2em] uppercase mb-4">
              Malani Marble Pvt.Ltd
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold font-['Cormorant_Garamond']">
              Download Catalogue
            </h1>

            <div className="mx-auto mt-5 w-16 h-px bg-white/80" />

          </div>
        </div>

      </section>


      <section className="px-5 py-16 md:px-10 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="mb-12 text-center">

            <h2 className="text-3xl md:text-4xl font-semibold text-red-600 font-['Cormorant_Garamond']">
               Marble Collections Catalogue
            </h2>

            <p className="text-gray-500 mt-3">
              Explore our premium marble and stone collections.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {catalogues.map((catalogue, index) => (

              <a
                key={index}
                href={catalogue.file}
                download 
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  bg-white
                  rounded-2xl
                  min-h-[175px]
                  px-7
                  py-8
                  flex
                  items-center
                  gap-6
                  shadow-[0_5px_20px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_8px_28px_rgba(0,0,0,0.13)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                {/* PDF Icon */}
                <div className="relative shrink-0 w-[70px] h-[82px]">

                  <FileText
                    size={70}
                    strokeWidth={1.8}
                    className="text-red-600"
                  />

                  <span className="
                    absolute
                    left-[-5px]
                    bottom-1
                    bg-red-600
                    text-white
                    text-[15px]
                    font-semibold
                    px-2
                    py-[3px]
                    rounded-sm
                  ">
                    PDF
                  </span>

                </div>


                {/* Title */}
                <h3 className="
                  text-lg
                  md:text-xl
                  font-medium
                  text-gray-900
                  leading-snug
                  group-hover:text-red-600
                  transition-colors
                  duration-300
                ">
                  {catalogue.title}
                </h3>

              </a>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default DownloadCatalogue;