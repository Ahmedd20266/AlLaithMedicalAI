import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Departments from "../components/Departments";
import Doctors from "../components/Doctors";
import Insurance from "../components/Insurance";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />

      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Departments />
        <Doctors />
        <Insurance />
        <Appointment />
        <Contact />
      </main>

      <Footer />
    </>
  );
}