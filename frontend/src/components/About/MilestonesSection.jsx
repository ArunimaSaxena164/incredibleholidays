import "./MilestonesSection.css";

function MilestonesSection() {
  return (
    <section className="milestone-section">

      <div className="milestone-image-wrapper">

        <div className="milestone-image-border"></div>

        <img
          src="/pageAbout/milestones.png"
          alt="Milestones"
          className="milestone-image"
        />

      </div>

      <div className="milestone-content">

        <span className="milestone-tag" style={{fontSize:"15px"}}>
          KEY MILESTONES
        </span>

        <h2 className="milestone-title">
          Milestones That Shaped Our Journey
        </h2>

        <p className="milestone-text">
          Very soon, the dream took shape. We organized our first
          destination wedding in Goa in 2012, curated exclusive tours
          for celebrity clients, and led our first Europe group tour.

          Over the years, we’ve proudly managed a 350-dealer incentive
          trip to Switzerland and a 650-people corporate conference in
          Dubai; each milestone driven by precision, heart, and a
          personal touch. Then there was no looking back, and
          Incredible’s journey continues.
        </p>

      </div>

      <div className="milestone-shape"></div>

    </section>
  );
}

export default MilestonesSection;