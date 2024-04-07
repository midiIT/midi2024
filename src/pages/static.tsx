import Carousel from "@/legacy/components/Carousel";
import ArticleSection from "@/legacy/components/sections/articleSection";
import EventsSection from "@/legacy/components/sections/eventsSection";
import OrganizersSection from "@/legacy/components/sections/organizersSection"
import SponsorsSection from "@/legacy/components/sections/sponsorsSection";
import TestPDF from "@/legacy/public/pdf/placeholder1.pdf";
import { Helmet } from "react-helmet";

import "../styles/static.css";

export default function Static() {
  return (
    <>
      <Helmet>
        <title>MIDI 2024</title>
        <meta name="description" content="MIDI 2024 tinklalapis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="flex flex-col md:flex-row">
        <div className="md:my-4 md:mx-4 md:h-full md:w-48"></div>
        <Carousel></Carousel>
        <section
          id="events"
          className="h-screen w-full px-4 pt-4 text-white transition-opacity duration-500"
        >
          <EventsSection />
        </section>
        <section
          id="team"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <OrganizersSection />
        </section>
        <section
          id="sponsors"
          className="invisible hidden w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <SponsorsSection />
        </section>
        <section
          id="articles"
          className="invisible hidden h-screen w-full bg-slate-900 px-4 pt-4 text-white opacity-0 transition-opacity duration-500"
        >
          <div className="grid-cols1 grid md:grid-cols-2 lg:grid-cols-3">
            <ArticleSection name="Test" pdfLocation={TestPDF} />
          </div>
        </section>
      </div>
    </>
  );
}
