import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

export default function RefundPolicy() {
  const currentYear = new Date().getFullYear();
  const effectiveDate = "October 14, 2026";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionClass = "border-b border-gray-200 dark:border-gray-700 pb-8";

  const headingClass =
    "text-2xl font-bold text-gray-900 dark:text-white mb-4";

  const linkClass =
    "text-emerald-600 dark:text-emerald-400 font-semibold hover:underline";

  const iconClass =
    "text-emerald-600 dark:text-emerald-400 mr-3 mt-1 w-5 h-5 shrink-0";

  const labelClass = "text-gray-900 dark:text-white";

  const sortOutItems = [
    {
      title: "Manufacturing defects",
      text: "cracks, broken edges, or finishing faults that aren’t part of the stone’s natural pattern.",
    },
    {
      title: "Transit damage",
      text: "if the material arrived broken or chipped, tell us within 48 hours of delivery and send photos or a short video of the damage and the packing.",
    },
    {
      title: "Wrong material",
      text: "if what you received doesn’t match your confirmed order in variety, size, thickness, or finish.",
    },
  ];

  return (
    <div className="bg-gray-500 min-h-screen py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marble Returns, Refunds & Replacements | Malani Marbles</title>
        <meta
          name="description"
          content="Received damaged, defective, or wrong marble? See how returns, refunds, and replacements work at Malani Marbles and how to raise a request with our team."
        />
        <link
          rel="canonical"
          href="https://www.malanimarbles.com/refund-policy"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 mt-6">
            Refund &amp; Returns Policy
          </h1>

          <p className="text-lg text-white">
            Effective Date:{" "}
            <span className="font-semibold">{effectiveDate}</span>
          </p>
        </header>

        {/* Content Container */}
        <div className="space-y-12 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-xl shadow-2xl">
          {/* Introduction */}
          <section className={sectionClass}>
            <p className="leading-relaxed">
              Buying marble isn’t like buying a phone. It’s heavy, it’s
              natural, and no two slabs look exactly alike. So before you place
              an order with Malani Marbles, it helps to know exactly how
              returns and refunds work. Here’s the short version: if we send
              you something damaged, defective, or wrong, we’ll fix it. Below is
              how.
            </p>
          </section>

          {/* When a return is possible */}
          <section className={sectionClass}>
            <h2 className={headingClass}>When a return is possible</h2>

            <p className="leading-relaxed">
              We can take material back if it’s unused, uncut, uninstalled, and
              still in its original packaging, and you’ve contacted us within 7
              days of delivery. Marble is often cut to size for a specific job,
              which is why the conditions are strict.
            </p>
          </section>

          {/* What we'll sort out for you */}
          <section className={sectionClass}>
            <h2 className={headingClass}>What we’ll sort out for you</h2>

            <ul className="list-disc pl-6 space-y-3 leading-relaxed">
              {sortOutItems.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </section>

          {/* What we can't take back */}
          <section className={sectionClass}>
            <h2 className={headingClass}>What we can’t take back</h2>

            <p className="leading-relaxed">
              A few things don’t qualify, and we’d rather say so now than after
              you’ve ordered.
            </p>

            <p className="leading-relaxed mt-4">
              Natural variation is the big one. Shade, veining, and pattern can
              differ from a sample or a photo, and that’s simply how stone is.
              We’d always suggest looking at the actual slab, or asking for
              batch photos, before you confirm.
            </p>

            <p className="leading-relaxed mt-4">
              We also can’t accept material that has been cut, polished,
              installed, or changed after delivery, or custom-made pieces
              (unless they arrive defective, damaged, or incorrect). Damage from
              handling, storage, installation, or harsh cleaning products on
              your side isn’t covered either. And the same goes for a change of
              mind, extra quantity ordered, or requests made after the 7-day
              window.
            </p>
          </section>

          {/* How to raise a request */}
          <section className={sectionClass}>
            <h2 className={headingClass}>How to raise a request</h2>

            <p className="leading-relaxed">
              Start by emailing{" "}
              <a href="mailto:info@malanimarbles.com" className={linkClass}>
                info@malanimarbles.com
              </a>{" "}
              or calling/WhatsApping{" "}
              <a href="tel:+919810387297" className={linkClass}>
                +91 98103 87297
              </a>
              . Send your order or invoice number, the delivery address, and
              photos or a video showing the problem.
            </p>

            <p className="leading-relaxed mt-4">
              Our team will get back to you within 2–3 working days. Sometimes
              we’ll ask for a few more pictures or send someone to inspect. A
              return counts as confirmed only after we’ve approved it in
              writing, so please don’t ship anything back before that.
            </p>

            <p className="leading-relaxed mt-4">
              If your case is approved, we’ll arrange the pickup and cover the
              return shipping ourselves. Just keep the material safely packed
              until we arrive.
            </p>
          </section>

          {/* How refunds work */}
          <section className={sectionClass}>
            <h2 className={headingClass}>How refunds work</h2>

            <p className="leading-relaxed">
              Once the material reaches us and passes inspection, we’ll let you
              know by email or phone. Approved refunds are processed within
              7–10 working days and go back to the way you originally paid,
              whether that’s bank transfer, card, or UPI. Your bank might take a
              little longer to show it.
            </p>

            <p className="leading-relaxed mt-4">
              For small issues, we may offer a partial refund or a fair price
              adjustment instead.
            </p>

            <p className="leading-relaxed mt-4">
              Two things to keep in mind: advance payments for custom-cut or
              made-to-order material aren’t refundable once cutting has started,
              and transport charges for a successful delivery aren’t refunded.
              If the delivery itself was our mistake, that second rule doesn’t
              apply.
            </p>
          </section>

          {/* Exchanges and replacements */}
          <section className={sectionClass}>
            <h2 className={headingClass}>Exchanges and replacements</h2>

            <p className="leading-relaxed">
              We don’t do direct exchanges. But if a defect, damage, or wrong
              delivery is confirmed, we’ll arrange a replacement, depending on
              stock. If the same material isn’t available, we’ll refund you for
              the affected quantity.
            </p>
          </section>

          {/* Good habits at delivery */}
          <section className={sectionClass}>
            <h2 className={headingClass}>Good habits at delivery</h2>

            <p className="leading-relaxed">
              When the material arrives, check it with the delivery person
              before they leave. If something looks off, write it on the
              delivery receipt, take photos or a video before unloading, and
              message us straight away. That one step makes any claim much
              quicker to settle.
            </p>

            <p className="leading-relaxed mt-4">
              Also, keep in mind that colours on a screen never match stone
              perfectly. Our website photos are only a guide.
            </p>

            <p className="leading-relaxed mt-4">
              We may update this policy now and then. The version that was live
              on the day of your order is the one that applies to it.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact us
            </h2>

            <p className="mb-6 leading-relaxed">
              Not sure about something? Ask before you order, or after
              delivery. We’re happy to help.
            </p>

            <p className="font-semibold text-gray-900 dark:text-white mb-5">
              Malani Marbles Pvt. Ltd.
            </p>

            <div className="space-y-5 font-medium">
              {/* Address: Delhi */}
              <div className="flex items-start text-base sm:text-lg">
                <FaMapMarkerAlt className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>Delhi:</span>
                  <p className="mt-1 leading-relaxed">
                    A-11, Asola Farms, Near Shanidham Mandir Road, Chhatarpur,
                    New Delhi – 110074
                  </p>
                </div>
              </div>

              {/* Address: Kishangarh */}
              <div className="flex items-start text-base sm:text-lg">
                <FaMapMarkerAlt className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>Kishangarh:</span>
                  <p className="mt-1 leading-relaxed">
                    Khasra No. 231/10, Village Kali Doongri, Kishangarh – 305801
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start text-base sm:text-lg">
                <FaPhone className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>Phone:</span>{" "}
                  <a href="tel:+919810387297" className={linkClass}>
                    +91 9810387297
                  </a>
                  {", "}
                  <a href="tel:+919811012011" className={linkClass}>
                    +91 9811012011
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start text-base sm:text-lg">
                <FaWhatsapp className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/919810387297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    +91 98103 87297
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start text-base sm:text-lg">
                <FaEnvelope className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>Email:</span>{" "}
                  <a href="mailto:info@malanimarbles.com" className={linkClass}>
                    info@malanimarbles.com
                  </a>
                  {", "}
                  <a href="mailto:sales@malanimarbles.com" className={linkClass}>
                    sales@malanimarbles.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start text-base sm:text-lg">
                <FaClock className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>Hours:</span> Monday to Sunday,
                  10:00 AM – 8:00 PM
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start text-base sm:text-lg">
                <FaGlobe className={iconClass} aria-hidden="true" />
                <div>
                  <span className={labelClass}>Website:</span>{" "}
                  <a
                    href="https://www.malanimarbles.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    www.malanimarbles.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer / Copyright Strip */}
        <div className="text-center mt-12 text-sm text-white">
          © {currentYear} Malani Marbles Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
