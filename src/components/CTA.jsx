import React from 'react'

export default function CTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <div className="relative group flex items-center justify-center">
        {/* Animated Background Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-[#7de2a2] opacity-25 animate-ping"></span>
        
        <a
          href="https://wa.me/+919810387297"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 
                     bg-[#25D366] hover:bg-[#1ebe5d] text-white 
                     rounded-full shadow-lg hover:shadow-2xl hover:scale-110 
                     transition-all duration-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.28-1.64a11.87 11.87 0 0 0 5.67 1.44h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.06 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.73.98 1-3.64-.23-.37a9.83 9.83 0 0 1-1.5-5.19c0-5.42 4.42-9.84 9.85-9.84 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 0 1 2.88 6.97c0 5.42-4.42 9.84-9.84 9.84Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </div>

      {/* Call Button */}
      <div className="relative group flex items-center justify-center">
        {/* Animated Background Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-[#729abe] opacity-25 animate-ping"></span>

        <a
          href="tel:+91 9810387297"
          aria-label="Call Us"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 
                     bg-[#0e385d] hover:bg-[#0a2742] text-white 
                     rounded-full shadow-lg hover:shadow-2xl hover:scale-110 
                     transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </div>
  )
}