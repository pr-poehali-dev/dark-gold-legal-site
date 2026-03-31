import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactsSection from '@/components/ContactsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(20,10%,6%)' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
