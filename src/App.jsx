import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventCards from "./components/EventCards";
import SinergiaVideo from "./components/SinergiaVideo";
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";
import HonoraryAlly from "./components/HonoraryAlly";
import Organizers from "./components/Organizers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-dark)] font-inter">
      <Navbar />
      <Hero />
      <About />
      <EventCards />
      <SinergiaVideo />
      <Agenda />
      <Sponsors />
      <HonoraryAlly />
      <Organizers />
      <Footer />
    </div>
  );
}
