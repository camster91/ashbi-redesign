import { useState } from "react";
import { OverlayProvider } from "@/components/OverlayContext";
import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Work } from "@/sections/Work";
import { Studio } from "@/sections/Studio";
import { Team } from "@/sections/Team";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { Journal } from "@/sections/Journal";
import { Pricing } from "@/sections/Pricing";
import { Voices } from "@/sections/Voices";
import { Faq } from "@/sections/Faq";
import { Footer } from "@/sections/Footer";
import { CaseStudyOverlay } from "@/sections/CaseStudyOverlay";
import { BookingOverlay } from "@/sections/BookingOverlay";

function App() {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <OverlayProvider
      openProject={(id) => setProjectId(id)}
      openBooking={() => setBookingOpen(true)}
    >
      <div className="min-h-screen bg-[#f5f1e6] text-[#12291c]">
        <Nav />
        <main>
          <Hero />
          <Work />
          <Studio />
          <Team />
          <Services />
          <Process />
          <Journal />
          <Pricing />
          <Voices />
          <Faq />
        </main>
        <Footer />

        <CaseStudyOverlay
          projectId={projectId}
          onClose={() => setProjectId(null)}
          onNavigate={(id) => setProjectId(id)}
        />
        <BookingOverlay open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </OverlayProvider>
  );
}

export default App;
