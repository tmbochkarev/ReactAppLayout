import React from 'react';
import './SectionBoxes.css';


function SectionBoxes() {
return (
  <section class="sec-boxes" role="section">
      <article className="box">
        <h1>Open-minded</h1>
        <p>Every option should be explored and tried no matter how unpredictable, impossible, insane or ridiculous does it looks or sound.</p>
        <button className="button" type="button" role="button" value="MORE">More</button>
      </article>
      <article className="box">
        <h1>Creative</h1>
        <p>Brainstorming, idea generation, playing sessions, note taking. You think you used everything? We will challenge your mind and its abilities to the limits.</p>
        <button className="button" type="button" role="button" value="MORE">More</button>
      </article>
      <article class="box">
        <h1>Bold</h1>
        <p>Our methods and ideas are are not written or following any books, curriculums or rules. We consider ourselves rebels and we are proud of it.</p>
        <button className="button" type="button" role="button" value="MORE">More</button>
      </article>
      <article className="box">
        <h1>Smart</h1>
        <p>Every project with innovation as a goal requires smart approach. Identify real problem first and look for the smartest and simplest solution later.</p>
        <button className="button" type="button" role="button" value="MORE">More</button>
      </article>
    </section>
)
}

export default SectionBoxes;
