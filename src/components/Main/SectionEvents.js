import React from 'react';
import './SectionEvents.css';

function SectionEvents() {
  return (
<section className="sec-events" role="section">
      <hr />
      <h1>Upcomming events</h1>
      <article>
        <h1>Tire Technology Expo</h1>
        <p>Tire Technology Expo has grown in strength and stature every year since it was started in Europe 15 years ago. Visitors and exhibitors to the conference and exhibition staged in February 2014 universally praised it as the 'world's leading tire design and tire manufacturing event', noting in particular the outstanding quality of the conference papers and speakers, and the comprehensive extent of machinery manufacturers and suppliers who exhibited at the event.</p>
        <a class="link" href="#">more...</a>
      </article>
      <article>
        <h1>Meteorology World Expo</h1>
        <p>Meteorological Technology World Expo is a truly international exhibition of the very latest climate, weather and hydro - meteorological forecasting, measurement and analysis technologies and service providers for a global community of key decision makers within the aviation industry, shipping companies, marine / port installations, airports, military operations, off-shore exploration companies, wind farm operators, met offices, agriculture operations and research institutes.</p>
        <a className="link" href="#">more...</a>
      </article>
      <article>
        <h1>Wearable Tech Expo</h1>
        <p>See live demos, listen to case studies, speak with Wearable Tech Experts The first Wearable Tech Expo in Tokyo 2014. Key players from Japan, America and Europe announced their new products and attracted attention from all over the world. The next Wearable Tech Expo in Tokyo will be doubling in size and include Robotics and IoT. The main players in the wearable industry, human factor engineers, brain scientists, media providers and creators will discuss the future of wearable technology! </p>
        <a className="link" href="#">more...</a>
      </article>
      <article>
        <h1>Space Tech Expo</h1>
        <p>Space Tech Expo is the West Coast's premier B2B space event for spacecraft, satellite, launch vehicle and space-related technologies. Taking place in Long Beach, the Space Tech Expo exhibition and conference brings together global decision-makers involved in the design, build and testing of spacecraft, satellite, launch vehicle and space-related technologies. Leading the West Coast space and satellite industry, Space Tech Expo is where end-users connect with solution providers.</p>
        <a className="link" href="#">more...</a>
      </article>
    </section>
  );
}

export default SectionEvents;