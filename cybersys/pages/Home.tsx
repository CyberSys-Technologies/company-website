import React from 'react';
import { Page } from '../types';
import PartnerEcosystem from '../components/PartnerEcosystem';
import { PhotoCTA, useReveal } from '../components/SolutionBlocks';

interface HomeProps {
  onPageChange: (p: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">

      {/* 1. HERO + TECHNOLOGY PARTNERS: "Global Technology, Connected by CyberSys" with the partner grid beneath */}
      <PartnerEcosystem onPageChange={onPageChange} />

      {/* 2. FINAL CALL TO ACTION: text on light grey, photo filling the other half */}
      <PhotoCTA
        onPageChange={onPageChange}
        eyebrow="Work with CyberSys"
        title="Build for the Future"
        text="Plan, implement and run a secure, resilient, multicloud-powered environment with CyberSys Technologies."
        cta="Start Consultation"
        image="/cta-team-workshop.webp"
        imageAlt="CyberSys Technologies team working together around a laptop"
      />

    </div>
  );
};

export default Home;
