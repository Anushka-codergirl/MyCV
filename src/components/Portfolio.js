const Portfolio = ({ Projects }) => (
  <div class="album py-5 bg-light" id="Portfolio">
    <div class="container">
      <h2 class="pb-4">My Projects</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Projects &&
          Projects.length > 0 &&
          Projects.map((project, key) => (
            <div class="col" key={key}>
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src={project.Image}
                  alt="portfolio"
                  aria-label="Projects"
                  focusable="false"
                />
                <div class="card-body">
                  <p class="card-text">{project.Desc}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        href={project.links}
                        target="_blank"
                        rel="noreferrer"
                        class="btn btn-primary"
                        role="button"
                      >
                        View Projects
                      </a>
                    </div>
                    <small class="text-muted">{project.Tags}</small>
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
