import React from 'react';
import SectionBoxes from './SectionBoxes';
import SectionEvents from './SectionEvents';
import SectionIntro from './SectionIntro';
import SectionPartners from './SectionPartners';
import SectionProjects from './SectionProjects';
import SectionStandards from './SectionStandards';
import './Main.css';

function Main () {
  return (
    <main role="main">
    <SectionIntro />
    <SectionBoxes />
    <SectionEvents />
    <SectionProjects />
    <SectionStandards />
    <SectionPartners />
    </main>
  );
}

export default Main;