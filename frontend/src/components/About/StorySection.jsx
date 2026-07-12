import "./StorySection.css";
import { GiFlyingFlag } from "react-icons/gi";

function AboutStory() {
  return (
    <section className="about-story-section">

      <div className="about-story-left">

        <span className="about-story-tag" style={{fontSize:"15px"}}>
          OUR STORY
        </span>

        <h2 className="about-story-title">
          Crafting Memories, Not Just Holidays
        </h2>

        <p>
          Incredible Holidays was founded in 2008 with a clear
          purpose; to create luxury vacations that leave lasting
          memories. From the beginning, we’ve never aimed to be
          the cheapest or cater to the masses.
        </p>

        <p>
          Instead, we focus on value-driven, thoughtfully curated
          experiences for those who want to spend meaningful time
          with their loved ones.
        </p>

      </div>

      <div className="about-story-right">

        <div className="about-philosophy-card">
<div className="about-philosophy-icon">
  <GiFlyingFlag className="flipped-flag" />
</div>

          <div>

            <h3>
              Founders & Philosophy
            </h3>

            <p>
              The company was born from the passion of two avid
              travelers, professionally qualified from Asia’s top
              institute; the Indian Institute of Travel and
              Tourism Management (IITTM, Gwalior).
            </p>

            <p>
              They believed that travel should go beyond
              sightseeing; it should awaken emotions,
              strengthen bonds, and become a cherished part of
              your life story.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutStory;