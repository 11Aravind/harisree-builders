import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { BuildingTransformation } from './components/BuildingTransformation';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { ProjectGallery } from './components/ProjectGallery';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ConsultationModal } from './components/ConsultationModal';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#304654] flex flex-col font-sans selection:bg-[#226e40]/20 selection:text-[#226e40]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Who We Are Section */}
        <WhoWeAre onOpenConsultation={handleOpenConsultation} />

        {/* 3. Building Construction Transformation Animation */}
        <BuildingTransformation />

        {/* 4. Why Choose Us (5 Value Highlights) */}
        <WhyChooseUs />

        {/* 5. Comprehensive Services (8 Interactive Image Cards) */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 6. Dynamic Project Gallery */}
        <ProjectGallery onOpenConsultation={handleOpenConsultation} />

        {/* 7. How We Work (4-Step Process Timeline) */}
        <ProcessTimeline />

        {/* 8. Client Testimonials & Social Proof */}
        <Testimonials />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Actions (WhatsApp & Call) */}
      <FloatingActions onOpenConsultation={() => handleOpenConsultation()} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
