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

export default function PaymentShippingPolicy() {
  const currentYear = new Date().getFullYear();
  const effectiveDate = "October 14, 2026";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionClass = "border-b border-gray-200 dark:border-gray-700 pb-8";

  const headingClass = "text-2xl font-bold text-gray-900 dark:text-white mb-4";

  const subHeadingClass =
    "text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3";

  const linkClass =
    "text-emerald-600 dark:text-emerald-400 font-semibold hover:underline";

  const iconClass =
    "text-emerald-600 dark:text-emerald-400 mr-3 mt-1 w-5 h-5 shrink-0";

  const labelClass = "text-gray-900 dark:text-white";

  const strongClass = "font-semibold text-gray-900 dark:text-white";

  const paymentMethods = [
    "Bank transfer",
    "UPI",
    "Credit and debit cards",
    "Net banking",
  ];

  const orderSteps = [
    {
      title: "Order confirmed.",
      text: "We confirm your order by phone or email once payment is received.",
    },
    {
      title: "Quality check.",
      text: "Our team inspects the material and packs it carefully before it leaves.",
    },
    {
      title: "Dispatch.",
      text: "We book the transport with a trusted transporter and share the details with you.",
    },
    {
      title: "Delivery and check.",
      text: "The material arrives at your site. Please inspect it with the delivery person.",
    },
  ];

  return (
    <div className="bg-gray-500 min-h-screen py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment & Shipping Policy for Marble | Malani Marbles</title>
        <meta
          name="description"
          content="Wondering how payment and delivery work for marble orders? See Malani Marbles’ payment options, shipping timelines, delivery checks, and how to reach our team."
        />
        <link
          rel="canonical"
          href="https://www.malanimarbles.com/payment-shipping-policy"
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 mt-6">
            Payment &amp; Shipping Policy
          </h1>

          <p className="text-lg text-white">
            Effective Date:{" "}
            <span className="font-semibold">{effectiveDate}</span>
          </p>
        </header>

        <div className="space-y-12 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-xl shadow-2xl">
          <section className={sectionClass}>
            <p className="leading-relaxed">
              Marble is a big purchase, and it’s heavy to move. So we like to
              keep the payment and delivery side simple and clear. This page
              covers how you pay, how your order reaches you, and what to do
              when it arrives.
            </p>
          </section>

          {/* Payment Policy */}
          <section className={sectionClass}>
            <h2 className={headingClass}>Payment Policy</h2>

            <h3 className={`${subHeadingClass} mt-0`} >How payment works</h3>
            <p className="leading-relaxed">
              Once you’ve finalised your material and the quotation, we confirm
              your order against payment. Full payment is needed before the
              material is dispatched. For larger or custom-cut orders, we may
              ask for an advance to start work, with the balance due before
              dispatch. Your quotation will mention the exact amounts and
              dates.
            </p>
            <p className="leading-relaxed mt-4">
              Please remember that advance payments for custom-cut or
              made-to-order material can’t be refunded once cutting has
              started. You can read the full details on our{" "}
              <a href="/refund-policy" className={linkClass}>
                Refund &amp; Returns Policy
              </a>{" "}
              page.
            </p>

            <h3 className={subHeadingClass}>Ways to pay</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              {paymentMethods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>

            <h3 className={subHeadingClass}>Invoices</h3>
            <p className="leading-relaxed">
              Every order comes with a proper GST invoice. If you need your
              company name or GSTIN on it, tell us before you pay so we can get
              it right the first time.
            </p>

            <h3 className={subHeadingClass}>Need help with payment?</h3>
            <p className="leading-relaxed">
              If something looks confusing or a payment doesn’t go through, just
              call or email us. We’ll sort it out with you.
            </p>
          </section>

          {/* Shipping Policy */}
          <section className={sectionClass}>
            <h2 className={headingClass}>Shipping Policy</h2>

            <h3 className={`${subHeadingClass} mt-0`}>Where we deliver</h3>
            <p className="leading-relaxed">
              We deliver across India from our Kishangarh and Delhi locations.
              If you’re not sure we cover your city or site, ask us before you
              order.
            </p>

            <h3 className={subHeadingClass}>Delivery time</h3>
            <p className="leading-relaxed">
              Most orders are delivered within 5–10 business days after payment
              is confirmed. The exact time depends on your location, the size of
              the order, and whether the material needs cutting or special
              packing. If there’s going to be a delay, we’ll tell you in advance
              rather than leave you guessing.
            </p>

            <h3 className={subHeadingClass}>Shipping charges</h3>
            <p className="leading-relaxed">
              Shipping isn’t a fixed price. It depends on where the material is
              going, how much of it there is, and its weight. Ask for an
              estimate while you’re still choosing your stone, and we’ll share
              an approximate cost before you pay.
            </p>

            <h3 className={subHeadingClass}>
              Loading, unloading and site access
            </h3>
            <p className="leading-relaxed">
              We take care of loading at our end. At your site, please keep a
              team ready for unloading, and make sure the vehicle can reach the
              delivery point. If there are narrow lanes, society timings or
              other restrictions, let us know early so the transport can be
              planned properly.
            </p>

            <h3 className={subHeadingClass}>Tracking your order</h3>
            <p className="leading-relaxed">
              Once your material is dispatched, we’ll share the transporter
              details and vehicle or tracking information, so you know where it
              is. Our team stays in touch until it reaches you.
            </p>
          </section>

          {/* How an Order Gets to You */}
          <section className={sectionClass}>
            <h2 className={headingClass}>How an Order Gets to You</h2>

            <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
              {orderSteps.map((step) => (
                <li key={step.title}>
                  <span className={strongClass}>{step.title}</span> {step.text}
                </li>
              ))}
            </ol>
          </section>

          {/* When Your Order Arrives */}
          <section className={sectionClass}>
            <h2 className={headingClass}>When Your Order Arrives</h2>

            <p className="leading-relaxed">
              Please open and check the material in front of the delivery
              person. If you notice any damage, write it on the delivery
              receipt, take clear photos or a video before unloading, and
              message us straight away. Transit damage needs to be reported
              within 48 hours of delivery so we can sort it out quickly. The
              full process is explained on our{" "}
              <a href="/refund-policy" className={linkClass}>
                Refund &amp; Returns Policy
              </a>{" "}
              page.
            </p>

            <p className="leading-relaxed mt-4">
              Also, a gentle reminder that natural stone varies in shade and
              veining, and photos on screens never match it perfectly. If a
              certain look matters to you, ask to see the actual slab or batch
              photos before you order.
            </p>
          </section>

          {/* Quality You Can Count On */}
          <section className={sectionClass}>
            <h2 className={headingClass}>Quality You Can Count On</h2>

            <p className="leading-relaxed">
              Malani Marbles has been supplying marble since 1997. Every order
              goes through a check before dispatch, because we’d much rather
              catch a problem at our warehouse than at your site.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h2>

            <p className="mb-6 leading-relaxed">
              Questions about payment, delivery charges, or timing? Reach out
              any time.
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
