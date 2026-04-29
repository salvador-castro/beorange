import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventCards from "./components/EventCards";
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";
import Organizers from "./components/Organizers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-dark)] font-inter">
      <Navbar />
      <Hero />
      <About />
      <EventCards />
      <Agenda />
      <Sponsors />
      <Organizers />
      <Footer />
    </div>
  );
}
