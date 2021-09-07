const Portfolio = ({ Projects }) => (
  <div className="album py-5 bg-light" id="Portfolio">
    <div className="container">
      <h2 className="pb-4">My Projects</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Projects &&
          Projects.length > 0 &&
          Projects.map((project, key) => (
            <div className="col" key={key}>
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src={project.Image}
                  alt="portfolio"
                  aria-label="Projects"
                  focusable="false"
                />
                <div className="card-body">
                  <p className="card-text">{project.Desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a
                        href={project.links}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        role="button"
                      >
                        View Projects
                      </a>
                    </div>
                    <small className="text-muted">{project.Tags}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
