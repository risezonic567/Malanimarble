import React from 'react';

export default function LocationMap() {
  return (
    <section className="py-11 px-4 md:px-12 max-w-7xl mx-auto">
  <div className="text-center max-w-2xl mx-auto mb-10">
    <span className="text-red-600 font-semibold uppercase tracking-widest text-lg">
      Visit Our Showrooms
    </span>

    {/* <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
      Find Us Here
    </h2> */}
  </div>

  {/* Two Maps */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Map 1 */}
    <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-96">
      <iframe
        title="Hotel Location Map 1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6492667864222!2d77.19692359999999!3d28.459987399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e2507adbcfd%3A0xc795d1caed5746d2!2sMALANI%20MARBLES%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1788949613755!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

    {/* Map 2 */}
    <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-96">
      <iframe
        title="Hotel Location Map 2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.8886833803595!2d74.85624318797579!3d26.65204633928458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bf3002016a2f9%3A0xa235ff70719c33c8!2sMalani%20Marble%2C%20kishangarh!5e0!3m2!1sen!2sin!4v1788949798974!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>
  );
}