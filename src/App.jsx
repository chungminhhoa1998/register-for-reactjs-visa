import './App.css'
import { useState } from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import FormInformation from './components/FormInformation'
import Modal from './components/ModalFormInformation'
import Footer from './components/Footer'

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>

      <div className="overflow-hidden">
        <Navbar />

        <Hero onOpenForm={() => setOpenModal(true)} />

        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <FormInformation />
      </Modal>
    </main>
  );
}

export default App
