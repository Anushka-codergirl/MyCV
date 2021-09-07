const Skills = ({ Skills }) => (
  <div className="container">
    <h2 className="pb-2 border-bottom">Skills</h2>
    <div className="row mb-5 pb-md-4 align-items-center py-5">
      {Skills &&
        Skills.length > 0 &&
        Skills.map((icon, key) => (
          <div className="col d-flex align-items-start" key={key}>
            <div className="masthead-followup-icon d-inline-block mb-2">
              <img src={icon.Icon} alt="Skills" />
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Skills;
