import React from 'react';
import './SectionProjects.css';

function SectionProjects() {
  return (
    <section className="sec-projects" role="section">
      <hr />
      <h1>Previous Projects</h1>
      <article>
        <h1>Neural network for Google</h1>
        <p>People from Google approached us this January with offer to create new neural network for whole Google's ecosystem. This idea was very interesting and looked almost impossible at first glance. However, our engineers proved their expertise and built amazing autonomous platform. <a class="link" href="#">more...</a></p>
      </article>
      <article>
        <h1>Faster operating system for Apple</h1>
        <p>For a years, since founding days of a company, Apple always worked with its own operating system. In October, this was about to change. Our company got chance to rewrite the history by creating brand new OS for Apple. It was very difficult and all our employees worked hard every day. <a class="link" href="#">more...</a></p>
      </article>
      <article>
        <h1>Manufacturing technology for Intel</h1>
        <p>Intel has been manufacturing company for many years. They always used the latest technologies to achieve the best results with lowest costs. However, this was not enough. Intel decided to offer us something that could disrupt whole technology sector. <a class="link" href="#">more...</a></p>
      </article>
    </section>
  );
}

export default SectionProjects;
