const Skills = ({ Skills }) => (
  <div class="container">
    <h2 class="pb-2 border-bottom">Skills</h2>
    <div class="row mb-5 pb-md-4 align-items-center py-5">
      {Skills &&
        Skills.length > 0 &&
        Skills.map((icon, key) => (
          <div class="col d-flex align-items-start" key={key}>
            <div class="masthead-followup-icon d-inline-block mb-2">
              <img src={icon.Icon} alt="Skills" />
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Skills;
