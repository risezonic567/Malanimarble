import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HomeAboutsection from "../components/HomeAboutsection";
import FilterGrid from "../components/FilterGrid";
import VirtualShowroom from "../components/VirtualShowroom";
import SwatchRail from "../components/SwatchRail";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";

import MarblesSection from "../components/MarbleSections";

export default function Index() {

  useEffect(() => {
    window.scroll(0, 0)
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Premium Italian Marbles & Granites Supplier in India</title>
        <meta name="description" content="Explore Italian, imported and natural marble, granite and onyx from Malani Marbles, a premium marble supplier in India for residential and commercial projects. " />
        <link rel="canonical" href="https://www.malanimarbles.com" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.malanimarbles.com/#organization",
      "name": "Malani Marbles",
      "legalName": "Malani Marbles Pvt. Ltd.",
      "url": "https://www.malanimarbles.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.malanimarbles.com/logo.png",
        "caption": "Malani Marbles Logo"
      },
      "image": "https://www.malanimarbles.com/images/og-image.jpg",
      "description": "Explore Italian, imported and natural marble, granite and onyx from Malani Marbles, a premium marble supplier in India for residential and commercial projects.",
      "foundingDate": "1997",
      "telephone": ["+91-9810387297", "+91-9811012011"],
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A 11, Asola Farms, Near Shanidham Mandir Road, Chhatarpur",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110074",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+91-9810387297",
          "email": "sales@malanimarbles.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@malanimarbles.com",
          "areaServed": "IN"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "knowsAbout": [
        "Italian Marble",
        "Imported Marble",
        "Onyx",
        "Brazilian Quartzite",
        "Indian Granite",
        "Slimtech Tiles"
      ],
      "location": [
        {
          "@type": "Place",
          "name": "Malani Marbles Kishangarh Branch",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Khasra No. 231/10, Village Kali Doongri",
            "addressLocality": "Kishangarh",
            "addressRegion": "Rajasthan",
            "postalCode": "305801",
            "addressCountry": "IN"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.malanimarbles.com/#website",
      "url": "https://www.malanimarbles.com/",
      "name": "Malani Marbles",
      "publisher": {
        "@id": "https://www.malanimarbles.com/#organization"
      }
    }
  ]
}
`}
        </script>

      </Helmet>
      <Hero />
      <HomeAboutsection />
      <FilterGrid />
      <VirtualShowroom />
      <SwatchRail />
      <MarblesSection />
      <Testimonials />
      <Projects />
      <FAQ />
      {/* <ContactSection /> */}
    </>
  );
}
