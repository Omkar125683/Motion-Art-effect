import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.css'; // Tailwind and additional CSS

function App() {
  useEffect(() => {
    // Animating Hero Section Text
    gsap.from(".hero-text", { duration: 2, y: 50, opacity: 0, ease: "power2.out" });

    // Animating Image Gallery
    gsap.from(".image-grid img", {
      duration: 1.5,
      opacity: 0,
      stagger: 0.2,
      scale: 0.8,
      ease: "power3.out",
    });

    // Scroll-triggered Animations for Interactive and Testimonials
    gsap.to(".interactive-element", {
      scrollTrigger: {
        trigger: ".interactive-section",
        start: "top center",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });

    gsap.to(".testimonial", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top center",
      },
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out"
    });

    // Scroll-triggered Animations for User Gallery
    gsap.from(".user-gallery img", {
      scrollTrigger: {
        trigger: ".user-gallery",
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-orange-500 to-purple-700 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="hero-text text-6xl font-bold mb-4">Motion Art Effect</h1>
        <p className="text-xl">Experience Smooth Animations</p>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery-section py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center mb-10">Gallery</h2>
          <div className="image-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/path-to-asset/image1.jpg" alt="Gallery 1" className="rounded-lg" />
            <img src="/path-to-asset/image2.jpg" alt="Gallery 2" className="rounded-lg" />
            <img src="/path-to-asset/image3.jpg" alt="Gallery 3" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="interactive-section bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-6">Interactive Element</h2>
          <p className="text-lg mb-8">Scroll down to see the effect</p>
          <div className="interactive-element bg-gradient-to-r from-orange-500 to-purple-700 p-10 text-white rounded-lg opacity-0 transform translate-y-10">
            I'm an animated box!
          </div>
        </div>
      </section>

      {/* User Gallery Section */}
      <section className="user-gallery py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center mb-10">User Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <img src="/path-to-asset/user1.jpg" alt="User 1" className="rounded-lg" />
            <img src="/path-to-asset/user2.jpg" alt="User 2" className="rounded-lg" />
            <img src="/path-to-asset/user3.jpg" alt="User 3" className="rounded-lg" />
            <img src="/path-to-asset/user4.jpg" alt="User 4" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md opacity-0 transform translate-x-10">
              <p>"Amazing work! The animations are so smooth and professional."</p>
              <h4 className="mt-4 font-semibold">Client 1</h4>
            </div>
            <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md opacity-0 transform translate-x-10">
              <p>"Absolutely stunning design and user experience."</p>
              <h4 className="mt-4 font-semibold">Client 2</h4>
            </div>
            <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md opacity-0 transform translate-x-10">
              <p>"Great attention to detail, will definitely work with them again!"</p>
              <h4 className="mt-4 font-semibold">Client 3</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white py-10 text-center">
        <p>© 2024 Motion Art Effect</p>
      </footer>
    </div>
  );
}

export default App;
