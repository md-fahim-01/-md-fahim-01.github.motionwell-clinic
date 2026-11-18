
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Doctor from "./components/Doctor.jsx";
import Services from "./components/Services.jsx";
import FeesTimings from "./components/FeesTimings.jsx";
import Testimonials from "./components/Testimonials.jsx";
import BookingForm from "./components/BookingForm.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Doctor />
        <Services />
        <FeesTimings />
        <Testimonials />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
