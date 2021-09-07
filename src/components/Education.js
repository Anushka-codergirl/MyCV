const Education = ({ Educations }) => (
  <div class="container">
    <h2 class="pb-2 border-bottom">Education</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-4 py-5">
      {Educations &&
        Educations.length > 0 &&
        Educations.map((education, key) => (
          <div class="col d-flex align-items-start" key={key}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/education.png"
              alt="edu"
              class="me-4"
            />
            <div>
              <h4 class="fw-bold mb-4">{education.Title}</h4>
              <p>{education.Desc}</p>
              <small class="text-muted">{education.Timeline}</small>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Education;
