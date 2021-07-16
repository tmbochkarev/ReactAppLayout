import React from 'react';
import './SectionPartners.css';

function SectionPartners() {
  return (
    <section className="sec-partners" role="section">
      <hr />
      <h1>Our Partners</h1>
      <div className="row">
        <div className="logo-container">
          <img src="https://i.imgur.com/oSriTuP.png" alt="Google logo" />
        </div>
        <div className="logo-container">
          <img src="https://i.imgur.com/kRgvevC.png" alt="Apple logo" />
        </div>
        <div className="logo-container">
          <img src="https://i.imgur.com/ZZjeIP3.png" alt="Wii logo" />
        </div>
        <div className="logo-container">
          <img src="https://i.imgur.com/536rtCW.png" alt="Valve logo" />
        </div>
        <div className="logo-container">
          <img src="https://i.imgur.com/VTq1c9p.png" alt="Adithya Institute of Technology logo" />
        </div>
        <div className="logo-container">
          <img src="https://i.imgur.com/GdYoyxo.png" alt="Intel logo" />
        </div>
      </div>
    </section>
  );
}


export default SectionPartners;

