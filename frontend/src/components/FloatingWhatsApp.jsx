import React from 'react';

/**
 * Floating WhatsApp Action Button
 * Fixed at bottom right for instant client messaging
 */
export default function FloatingWhatsApp() {
  const whatsappNumber = "923144632662";
  const defaultMsg = encodeURIComponent("Hello AS Solar! I am interested in a free solar consultation and site survey.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMsg}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with AS Solar on WhatsApp"
      title="Chat on WhatsApp (0314 4632662)"
    >
      <div className="whatsapp-pulse"></div>
      <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.432l.359.213c1.472.873 3.176 1.334 4.91 1.335 5.234 0 9.49-4.255 9.492-9.491.002-2.536-.986-4.92-2.78-6.716-1.794-1.797-4.18-2.787-6.717-2.788-5.234 0-9.49 4.256-9.491 9.492-.001 1.839.529 3.63 1.536 5.187l.233.359-.999 3.649 3.739-.981zm11.385-6.73c-.092-.154-.338-.246-.707-.43-.369-.185-2.185-1.077-2.523-1.2-.338-.123-.585-.185-.831.185-.246.369-.954 1.2-1.169 1.446-.215.246-.431.277-.8.092-.369-.185-1.558-.574-2.968-1.832-1.098-.98-1.84-2.191-2.055-2.56-.215-.369-.023-.568.161-.752.167-.165.369-.431.554-.646.185-.215.246-.369.369-.615.123-.246.062-.462-.031-.646-.092-.185-.831-2.001-1.139-2.74-.3-.72-.605-.623-.831-.634-.215-.01-.462-.01-.707-.01-.246 0-.646.092-.985.462-.338.369-1.293 1.262-1.293 3.08 0 1.816 1.323 3.57 1.508 3.816.185.246 2.603 3.974 6.307 5.57 2.128.918 2.969.986 4.025.831.644-.094 1.984-.811 2.262-1.595.277-.785.277-1.458.194-1.597z"/>
      </svg>
      <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
